import React, { Component,useEffect ,useState,useContext} from 'react';
import Timer from '../Timer/Timer'
import Face,{check,webcamRef} from '../Face/Face'
import './EHStudent.css'
import pdf from './pdf/DSproject.pdf'
import { browser } from '@tensorflow/tfjs-core';
import webCamContext from '../../context/webcamContext/webcamContext';

const Ehstudent =()=>{



     const {checkCam} =useContext(webCamContext);
    console.log(check);
    const [click,setClick]=useState(false);
    const [tabChange,setTabChanges]=useState(0);
    // const [checkCam,setCheckCam]=useState(check);
    const x = 500000;
    const startDate = new Date().getTime() + x;
    const handleClick=()=>{
        
        setClick(!click);
    }

    



    useEffect(()=>{
        console.log(checkCam);
        // setCheckCam(check);
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
                    alert("Tab changed note more then 4 tab changes and you will be disqualified");
                }
                if(tabChange==4){
                    alert("max tab change limit reached")
                }
                
                
            })
            // if(!checkCam){
            //     document.querySelector(".popup_setup").style.display="block";
            // }
            // if(checkCam){
            //     document.querySelector(".popup_setup").style.display="none";
            // }
            
        
    },[tabChange,checkCam])


    // const CheckWebCam=()=>{
    //     console.log("click");
    //     window.location.reload();
    //     setCheckCam(true);
    //     if(checkCam){
    //         document.querySelector(".popup_setup").style.display="none";
    //     }
    //     console.log(check);
    // }

    return(<>
            {/* <div className="popup_setup">
                <div className="model_popup">
                </div>
                <div className="model_container">
                    <div className="my_custom_model">
                        <div className="top_bar"></div>
                        <h2>Alert !</h2>
                        <div className="model_msg">
                            Allow the website to access webcam and click ok to remove  or
                            else you wont be able to give the exam.
                            
                        </div>
                        <center><button onClick={()=>{CheckWebCam()}} >Ok</button></center>
                    </div>
                </div>
            </div> */}
            {/* <h1>Name: Pinky Sharma</h1> */}
                <div className="Student">
                    <div className="ab">
                        <div className="my_name_is">
                            <h1>Name: Pinky Sharma</h1>
                        </div>
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
// class Ehstudent extends Component {
    
//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }


//     render() {
//         const x = 500000;
//             const startDate = new Date().getTime() + x;
//         return(
            
//       <>

//      <h1>Name: Pinky Sharma</h1>
//       <div className="Student">
//         <div className="ab">
           
//             <embed src= {pdf} width="85%" height="900vh"/>
        
            
//           </div>
//         <div className="cd">
        
//             <div id="app"><h2>Time Remaining:<br/></h2><Timer startDate={startDate} /></div>
//             <div className="right">
//             <div><Face /></div>
//                 <div className="noticeBoard">Notice Board</div>
//              <div className ="submit_EHS">
//                  <div type="file" className="upload">UPLOAD</div>
//                  <div className="submit">SUBMIT</div>
//              </div>

// </div>
//         </div>
        

//       </div>
//       </>
      
//         )
//     }
// }

export default Ehstudent