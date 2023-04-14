import React from 'react';
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import Brain from './Brain.png';


const Logo = () =>{
    return(
        <div className='logoPlace ma4 mt0 br2 shadow-2 br-100' >
            <Tilt>
                    <img src={Brain} alt="logo" />
            </Tilt>
        </div>
    )
}

export default Logo;

