// Image Link Component
import React from "react";


const ImageLinkForm = () => {
  return (
    <div>
        <p className='f4 pa2 w-70 center'>
            {'This Magic Brain will detect faces in your pictures. Give it a try '}
        </p>
        <div>
            <input className='f3' type='text' />
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
    </div>
  );
};

export default ImageLinkForm;