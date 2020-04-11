import React, { Component } from 'react';
import { Webcam } from '../../utils/WebCam';
import './ClCamera.css';
import axios from 'axios';

interface ClCameraState {
    capturedImage: any;
    captured: boolean;
    uploading: boolean
  }
  
interface clCameraProps {

}  
  
class ClCamera extends React.Component<clCameraProps, clCameraProps> {

  public readonly state: ClCameraState;
  webcam: any;
  canvasElement: any;  

  constructor(props: clCameraProps) {
      super(props);
      this.webcam = null;
      this.state = {
         capturedImage: null,
        captured: false,
        uploading: false
        }
  }  

  componentDidMount() {
    // initialize the camera
    this.canvasElement = document.createElement('canvas');
    this.webcam = new Webcam(
        document.getElementById('webcam'),
        this.canvasElement
    );
    this.webcam.setup().catch(() => {
        alert('Error getting access to your camera');
    });
  }



}  