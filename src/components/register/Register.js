import React from 'react'

const Register = ({onRouteChange}) => {
  return (
    <div className='flex justify-center items-center'>
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 flex justify-center">
        <main className="pa3 ph0 black-70">
        <form className="measure aligned-center ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" HtmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" HtmlFor="password">Email</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" HtmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
            </fieldset>
            <div >
            <p onClick={() =>onRouteChange('home')} className="f6 link dim black db pointer">Register</p>
            </div>
        </form>
    </main>
  </article>
</div>
    );
}

export default Register