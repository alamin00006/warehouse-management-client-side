import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
   
    const [signInWithGoogle, googleUser,googleError] = useSignInWithGoogle(auth);
    

    const [
        signInWithEmailAndPassword,
         user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);
    
     const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
      const [userInfo, setUserInfo] = useState({
        email: "",
        password : ''
    })
  
    const [error, setError] = useState({
        emailError : "",
        passWordError: ""
    })
      
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";
      useEffect(() =>{
        if(user){
          navigate(from, { replace: true })
      }
      },[user, googleUser])
  
          const emailCheck = (e) =>{
          const emailRegex = /\S+@\S+\.\S+/;
         const validEmail = emailRegex.test(e.target.value);
         if(validEmail){
          setUserInfo({...userInfo, email:e.target.value})
          setError({...error, emailError: ''})
         }else{
          setError({...error, emailError: 'Invalid Email'})
          setUserInfo({...userInfo, email:''})
         }
          }
   
      const passwordCheck = (e) =>{
          const passwordRegex = /.{6,}/;
          const validPassWord = passwordRegex.test(e.target.value);
          if(validPassWord){
              setUserInfo({...userInfo, password:e.target.value})
              setError({...error, passWordError: ''})
             }else{
              setError({...error, passWordError: 'Invalid Password'})
              setUserInfo({...userInfo, password:''})
             }
       }
        
 useEffect(() =>{
    if(hookError){
        toast(hookError.message)
       }
 },[hookError,googleError])
 const handleSubmit =(e)=>{
   e.preventDefault();
   
   signInWithEmailAndPassword(userInfo.email, userInfo.password);
   
 }

    return (
       
            <div>
            
            <div>
            <h1 className='form-title text-center'>Please Login</h1>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center login-form'>
            <div>
            
            <label htmlFor="email">Email</label>
            <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
           {error?.emailError && <p className='text-danger'>{error.emailError}</p>}
           
            <label htmlFor="password">Password</label>
            <input onChange={passwordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
            {error?.passWordError&& <p className='text-danger'>{error.passWordError}</p>}
                 <p></p>
           <input className='bg-info border-0 py-2 mt-2 fs-5' type="submit" value="Login" />
           <p>No Account<Link to = "/signUp">Please Register
           </Link></p>
           
           <ToastContainer/>
            </div>
          
        </form>
        <button onClick={()=>signInWithGoogle()} className='btn btn-primary google-signIn'>Google SignIn</button>
            </div>
            <div>
            <button className='btn btn-danger reset-button'
        onClick={async () => {
          await sendPasswordResetEmail(userInfo.email);
          toast('Sent email');
        }}
      >
        Forget Password
      </button>
      <ToastContainer/>
            </div>
        </div>
        
    );
};

export default Login;