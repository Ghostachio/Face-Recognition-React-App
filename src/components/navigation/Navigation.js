import React from 'react';
import './Navigation.css';


const Navigation = ({onRouteChange}) =>{
    return(
        <nav className='sign'>
            <p onClick ={() => onRouteChange('Signin')} className='f5 link dim black underline pa4 pointer'>Sign out</p>
        </nav>
    )
}

export default Navigation;