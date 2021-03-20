import React from "react";
import "./Submission.css"
import Timer from "../Timer/Timer";
import pdf from "../EHStudent/pdf/DSproject.pdf";
const Submission=()=>{
    const x = 500000;
    const startDate = new Date().getTime() + x;

    
    return(<>
    <div className="submisson">
            {/* section1 */}
            <div className="section1">
                <div className="part1">
                    <div className="title">
                        <h1>EXAM CODE : XYZA</h1>
                    </div>
                    <div className="student_info">
                        <h2>Note for Students:</h2>
                        <div className="note_box">
                            
                        </div>
                    </div>
                </div>
                <div className="part2">
                    <div className="paper">
                        <h2>Question Paper :</h2>
                        <div className="paper_box">
                            <embed src= {pdf} width="658px" height="654.99px"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* section2 */}
            <div className="section2">
                <div className="my_timer">
                <div id="app"><h2>Time Remaining:<br/></h2><Timer startDate={startDate} /></div>
                </div>
                <div className="list_student">
                    <h2>Student List</h2>
                    <div className="list_box">
                        <header>
                            <div>
                                <h3>
                                    Name
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Status
                                </h3>
                            </div>
                        </header>
                        <div className="line"> </div>
                        <div className="students_are">
                            <div className="student_name">
                                <h3>Student1</h3>
                            </div>
                            <div className="student_status">
                                <h3>Submitted</h3>
                            </div>
                        </div>
                        <div className="students_are">
                            <div className="student_name">
                                <h3>Student1</h3>
                            </div>
                            <div className="student_status">
                                <h3>Submitted</h3>
                            </div>
                        </div>
                        <div className="students_are">
                            <div className="student_name">
                                <h3>Student1</h3>
                            </div>
                            <div className="student_status">
                                <h3>Submitted</h3>
                            </div>
                        </div>
                        <div className="students_are">
                            <div className="student_name">
                                <h3>Student1</h3>
                            </div>
                            <div className="student_status">
                                <h3>Submitted</h3>
                            </div>
                        </div>
                        <div className="students_are">
                            <div className="student_name">
                                <h3>Student1</h3>
                            </div>
                            <div className="student_status">
                                <h3>Submitted</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>)

}

export default Submission;