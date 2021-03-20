import React , { useEffect , useState , useContext , useRef } from "react";
import "../../css/exam.css";

import { useParams , Link } from 'react-router-dom';
import axios from 'axios';

import StudentContext from '../../context/studentContexts/StudentContext';
import Noresults from "./Noresults";
import Navbar  from '../Navbar/Navbar';

const Exam=()=>{

    const { _id } = useParams();

    const [ students , setStudents ] = useState(null);

    const [ exam , setExam ] = useState(null);

    const [ studentsLength , setStudentLength ] = useState(0);

    const { getStudents , searchStudentName , searchStudentId , clearStudent , studentsofExam , search , getCheckStatus , checkedStatus } = useContext(StudentContext);

    const searchName = useRef('');
    const searchId = useRef('');

    const handleChangeName = (e)=>{

        if(searchName.current.value!==''){
            searchStudentName(e.target.value);
       }else{
           clearStudent();
       }

    }

    const handleChangeScholarId = (e)=>{

        if(searchId.current.value!==''){
            searchStudentId(e.target.value);
       }else{
           clearStudent();
       }

    }

    useEffect(async () => {
        const response = await axios.get(`/exam/getExamDetails/${_id}`);

        setExam(response.data.exam);

        setStudents(response.data.students);

        setStudentLength(response.data.students.length);

        await getCheckStatus();

        await getStudents(_id);
    }, [])

    const anchorLink = {
      color:'#000',
      textDecoration:'none'
    }

    const topLebal = {
      width:'590px',
      position:'absolute',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      marginTop:'-50px'
    }

    return (
      <div id='ExamId'>
      <Navbar />
      <div className="PExam">
      <h1>The Exam</h1>
      <div class="flex-container">
       
        <div class="flex-item-left">
       
          <input type="text" ref={searchName} placeholder="Search by name" className="search1" onChange={handleChangeName} />
       
          <input type="Number" ref={searchId} placeholder="Search by ID" className="search2" onChange={handleChangeScholarId} />
       
          <div className="list">
       
           <p style={{marginTop:'50px'}}>student list</p>

      <table>
      <tr >
          <th>Name</th>
          <th>ID</th>
          <th>Status</th>
          <th>Mark</th>
        </tr>
      </table>

      <table>
      <hr style={{width:'590px',position:'absolute'}}></hr>
      { search !== null ? search.length===0 ? 
                 <Noresults /> : 
                search.map(
                  student=>(
                        <tr>
                          <td><Link to={`/student/getStudentDetails/${student._id}`} style={anchorLink}>{student.name}</Link></td> 
                          <td>{student.scholarId}</td>
                          <td>{student.status===false?'false':'true'}</td>
                          <td>{student.marks}</td>
                         </tr> 
                  )
                ) : 
                studentsofExam.length===0 ? 
                <Noresults /> :
                studentsofExam.map(
                  student=>(
                      <tr>
                        <td><Link to={`/student/getStudentDetails/${student._id}`} style={anchorLink}>{student.name}</Link> </td>
                        <td>{student.scholarId}</td>
                        <td>{student.status===false?'false':'true'}</td>
                        <td>{student.marks}</td>
                      </tr> 
                  )
                ) 
           }
</table>

</div>
</div>
<div class="flex-item-right">
<div className="details">
    <h4 style={{marginBottom:'50px'}}>Exam Details</h4>
    <table>
        <tr>
            <th>Exam Date</th>
            <th>{exam!==null ? exam.date.split("T")[0] : NaN}</th>
        </tr>
        <tr>
            <td>Student Appreared</td>
            <td>{studentsLength}</td>
        </tr>
        <tr>
            <td>student Appreared</td>
            <td>{studentsLength}</td>
        </tr>
    </table>
</div>
<div className="status">
    <h3 style={{marginBottom:'50px',marginLeft:'-100px'}}>Check Status</h3>
    <table>
        <tr>
            <td>papers checked</td>
            <td>{checkedStatus}</td>
        </tr>
        <tr>
            <td>Papers remaining</td>
            <td>{studentsLength - checkedStatus}</td>
        </tr>
    </table>
   </div>
  </div>
 </div>
</div>
</div>)
}
export default Exam;