import React from 'react';

import CameraImg from '../../../img/camera.png'

import "../../../css/components/Camera.css"

function Camera() {
    return ( 
        <a href="/" className="camera">
            <img src={CameraImg} />
        </a>    
     );
}

export default Camera;


