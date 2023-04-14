import React from 'react'
import 'tachyons';
import './Face.css';

const Face = ({ imageUrl, box}) => {
  return (
    <div className='flex  justify-center ma'>
      <div className='absolute ma2'>
        <img id='inputImage' src={imageUrl} alt='' width={'500px'} height={'auto'}/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    </div>
  );
}

export default Face;