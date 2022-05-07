import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {


  const [userInfo, setUserInfo] = useState({
      email: "",
      password : '',
      confirmPass: ""
  })

  const [error, setError] = useState({
      emailError : "",
      passWordError: ""
  })

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const navigate = useNavigate();
    useEffect(() =>{
        if(user){
            navigate('/home')
        }
    },[user])

    useEffect(() =>{
        if(hookError){
            toast(hookError.message)
     }
    },[hookError,googleError])

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
           console.log(userInfo)
     }

     const confirmPasswordCheck = (e)=>{
       
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPass: e.target.value})
            setError({...error, passWordError: ''})
           }else{

            setError({...error, passWordError: 'dont Match'})
            setUserInfo({...userInfo, confirmPass:"" })
           }
     }
        
    

 const handleSubmit =(e)=>{
   e.preventDefault();
   
   createUserWithEmailAndPassword(userInfo.email, userInfo.password);

 
 }

    return (
        <div>
            
        <form onSubmit={handleSubmit} className='d-flex justify-content-center login-form'>
       <div>
       <h1 className='form-title'>Please Register</h1>
            <label htmlFor="email">Email</label>
            <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
           {error?.emailError && <p className='text-danger'>{error.emailError}</p>}
           
            <label htmlFor="password">Password</label>
            <input onChange={passwordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
            {error?.passWordError&& <p className='text-danger'>{error.passWordError}</p>}
            <label htmlFor="password">Confirm Password</label>
            <input onChange={confirmPasswordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="confirmPassword" id="password" />
            <p></p>
           <input className='bg-info border-0 py-2 mt-2 fs-5' type="submit" value="Register" />
           <p>Already have a Account<Link to = "/login">Please Login
           </Link></p>
           
           <ToastContainer/>
       </div>
        </form>
        <button onClick={()=>signInWithGoogle()} className='btn btn-primary google-signIn'>Google SignIn</button>
    </div>
    
    );
};

export default SignUp;