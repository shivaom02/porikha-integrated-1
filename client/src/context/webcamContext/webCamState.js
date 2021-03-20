import React,{useReducer} from 'react';
import WebcamReducer from './webcamReducer';
import WebcamContext from './webcamContext';
import axios from 'axios';
import { CHECK_WEB } from '../types';

const WebCamState=(props)=>{
   const initialState={
        webcam:false,
   }

const [state, dispatch] = useReducer(WebcamReducer, initialState);

   
const CheckWebCam=(webcam)=>{
    dispatch({
        type:CHECK_WEB,
        payload:webcam
    })
}

   return(
      <WebcamContext.Provider
      value={{
        checkCam:state.webcam,
          CheckWebCam,
      }} 
      >{props.children}</WebcamContext.Provider>
   )
}
export default WebCamState;
