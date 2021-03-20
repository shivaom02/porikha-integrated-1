import React, { Component,useEffect ,useState} from 'react';
import Timer from '../Timer/Timer'
import Face from '../Face/Face'
import './EHStudent.css'
import pdf from './pdf/DSproject.pdf'

import { browser } from '@tensorflow/tfjs-core';


const Ehstudent =()=>{

    const [click,setClick]=useState(false);
    
    const [tabChange,setTabChanges]=useState(0);
    
    const x = 500000;
    
    const startDate = new Date().getTime() + x;
    
    const handleClick=()=>{
        
        setClick(!click);
    }

    
    useEffect(()=>{
       
        window.onbeforeunload = confirmExit;
            function confirmExit()
            {
              return "show warning";
            }   
                   
        
            document.addEventListener("visibilitychange",()=>{
                
                if(document.hidden){
                    const count =tabChange+1
                    setTabChanges(count);
                    console.log(tabChange);
                }
                if(tabChange==4){
                    alert("max tab change limit reached")
                }
                
                
            })
            
            
  
        
    },[tabChange])
    return(<>

            <h1>Name: Pinky Sharma</h1>
                <div className="Student">
                    <div className="ab">
                    
                        <embed src= {pdf} width="85%" height="900vh"/>
                    
                        
                    </div>
                    <div className="cd">
                    
                        <div id="app"><h2>Time Remaining:<br/></h2><Timer startDate={startDate} /></div>
                        <div className="right">
                        <div><Face /></div>
                            <div className="noticeBoard">Notice Board</div>
                        <div className ="submit_EHS">
                            <div type="file" className="upload">UPLOAD</div>
                            <div className="submit">SUBMIT</div>
                        </div>

            </div>
            </div>
                    

        </div>

    </>)
}

export default Ehstudent