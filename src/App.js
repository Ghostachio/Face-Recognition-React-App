import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Search from './components/search/Search';
import Rank from './components/rank/Rank';
import Face from './components/face/Face';
import Signin from './components/Signin/Signin';
import Register from './components/register/Register';
import ParticlesBg from 'particles-bg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'Signin'
    }
  }

  calculateFaceLocation = (data) =>{
    // console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow :height - (clarifaiFace.bottom_row * height),
    }
  }


  displayFaceBox = (box) =>{
    console.log(box);
    this.setState({box:box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })

  }


  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input});
    const USER_ID = "ghostachio";
    const PAT = "5620a3fbb59149248f685769e356709c";
    const APP_ID = "Face-reco";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = this.state.input;
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className='container'>
        <ParticlesBg color="#ffffff" num={100} type="cobweb" bg={true} />
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route ==='home'
          ?<div>
          <Logo />
          <Rank />
          <Search onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <Face box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        :(
          this.state.route === 'Signin'?
            <Signin onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange} />
         )
        }
      </div>
    );
  }
}

export default App;
