import React, { useRef ,useState} from "react";
import "../SignupLogin.css";
import {useAuth} from '../Context/AuthContext.js'
import { Navigate } from "react-router-dom";
import {Link,useNavigate} from 'react-router-dom'

export default function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const {signup}=useAuth();
    const [error,setError]=useState();
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){

            return setError("Passwords Do Not Match")
        }
        try{
            setError('');
            setLoading(true);
            await  signup(emailRef.current.value,passwordRef.current.value)
            navigate('/todolist')
        }
        catch{
            setError("Failed To Create An Account")
            setLoading(false);
        }
        
    }
        return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Signup</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="SignupLogin.css" />
      <div className="container">
        <div className="form">
          <div className="sign-in-section">
            <h1>Sign Up</h1>
            <br></br>
            {error }
            {/* <ul>
            <li>
              <i className="fa fa-facebook-f" />
            </li>
            <li>
              <i className="fa fa-linkedin" />
            </li>
            <li>
              <i className="fa fa-twitter" />
            </li>
          </ul>
          <p>or use your email</p> */}

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email" ref={emailRef}/>
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" ref={passwordRef} />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" ref={passwordConfirmRef} />
              </div>
              {/* <div className="form-options"> */}
                {/* <div className="checkbox-field">
                <input id="rememberMe" type="checkbox" className="checkbox" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div> */}
                {/* <a href="/forgot-password">Forgot Password?</a>
              </div> */}
              <div className="form-field">
                <button disabled={loading}
                  type="submit"
                  className="btn btn-signin"
               
                >Sign Up</button>
              </div>
            </form>
                  <div className="loginlink">Already Have An Acoount??
            <div className="links">
              <a href="/login" className="loginlink"> Login</a>
              {/* <a href="#">Terms &amp; Conditions</a> */}
            </div>
                    </div> 
          </div>
        </div>
      </div>
    </>
  );
}
