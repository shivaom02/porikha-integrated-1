import React,{ useState,useContext , useEffect } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../context/authContexts/authContext';
import '../../css/register.css';

import src from './images/logo.png';

const Login=(props)=>{

  const { loginTeacher , userAuth , errors , clearError } = useContext(AuthContext)

  const [ teacherl , setTeacherl ] = useState({
    email:'',password:''
  });

  useEffect(() => {
    if(userAuth){
      props.history.push('/');
    }
  }, [userAuth , props.history])

  const {email,password} = teacherl;

  const handleChange = (e)=>{
     setTeacherl({
       ...teacherl,
       [e.target.name]:e.target.value
     })
     clearError();
  }
  
  const logSubmit = (e)=>{
    e.preventDefault();
    loginTeacher({email,password});
  }
  return (
    <body className="reg">
    <div className="wrapper">
    <section className="left">
      <img className="logo" src={src} alt="" />
      <div className="question">

          New User?
      
      </div>
      <div className="btn">
          <Link to="/register" style={{color:"white",textDecoration:'none'}}>
             <button className="join" type="submit">
                 Sign Up.
             </button>
          </Link>
        <p className="" style={{marginTop:'50px'}}><Link to="/student" style={{color:"black",textDecoration:'none',fontSize:'150%'}}>Are you as student ?</Link>.</p>

      </div>
    </section>
    <section className="right" style={{marginTop:'150px'}}>
      <div>
        <h2 className="signIn">Sign In</h2>
      </div>
      <form action="post" onSubmit={logSubmit}>

        <div>
          <input className="email" 
             type="email" 
             placeholder="Email"
             required 
             name='email'
             autoComplete="off"
             onChange={handleChange}
             value={email}/>
        </div>
    
        <div>
          <input
            className="pass"
            type="password"
            placeholder="Password"
            required
            name='password'
            autoComplete="off"
            onChange={handleChange} 
            value={password}
          />
        </div>
       
    
        <div>
          <button className="btnSignIn" type="submit">
            Sign In
          </button>
             {errors !== null && <button style={{height:'30px',position:'absolute',color:'white',background:'red',marginLeft:'-170px',marginTop:'100px',padding:'20px'}}>
             {errors.msg ? errors.msg : errors.error[0].msg }
             <button style={{position:'absolute',left:'90%',color:'white'}}>X</button>
            </button>} 
        </div>
      </form>
    </section>
  </div>
  </body>
  )
}

export default Login;
