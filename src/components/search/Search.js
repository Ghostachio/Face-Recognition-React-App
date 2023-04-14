import React from 'react';

const Search = ({onInputChange, onSubmit}) =>{
    return(
        <div>
            <p className='tc f3'>
                {'This Magic Brain Will Detect Faces In Your Pictures'}
            </p>
            <div className='flex justify-center pv4'>
                <div className='form pa4 br3 shadow-5'>
                    <input className=' f4 pa1 w-70 center mv1 ba b--black-025' type="text" onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv1 dib white bg-light-purple ba b--black-025' onClick={onSubmit}>Scan</button>
                </div>
            </div>
        </div>
    )
}

export default Search;

