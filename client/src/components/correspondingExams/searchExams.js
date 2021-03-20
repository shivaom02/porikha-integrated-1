import React,{useContext,useRef} from 'react';
import examContext from '../../context/examContexts/AppContext';

import "../../css/Page1.css";

const ExamSearch = () => {

  const { clearExamByName , searchExamByName } = useContext(examContext);
  
  const searchValue=useRef('');
  
  const handleChange=(e)=>{
  
     if(searchValue.current.value!==''){
           searchExamByName(e.target.value);
      }else{
          clearExamByName();
      }
  }
  return (
    <div style={{background:'white',height:'35px',border:'1px solid black',borderRadius:'15px',marginLeft:'-5%'}}>
     
      <input type="text" ref={searchValue} className="search" placeholder=" Search Exam by name ..." onChange={handleChange} style={{fontSize:'1.1rem',padding:'4px',border:'none'}}/>
     
      <i className="fas fa-search search-icon" style={{color:'black'}} />
    
    </div>
  )
}

export default ExamSearch