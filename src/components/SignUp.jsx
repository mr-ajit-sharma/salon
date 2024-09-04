import React, { useState } from 'react'

const SignUp = () => {
  const [fullname,setFullname]=useState('')
  const [number,setNumber]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [error,setError]=useState('')
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const nameHandler=(e)=>{
    setFullname(e.target.value)
  }
  const phoneHandler=(e)=>{
    setNumber(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value)
  
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
      setError("password do not match")
      return ;
    }
    if(!email.includes('@')){
      setError("Plz give a valid email")
      return ;
    }
    setEmail('');
    setPassword('')
  }
  return (
    <div className='log-main'>
      <div className='log h-75'>
        <h1>SignUp</h1>
        <form action="" className='form h-60' onSubmit={submitHandler}>
          {error&&<p className='error'>{error}</p>}
          <input type="text" name='fullname' className='input' onChange={nameHandler} value={fullname} placeholder='Enter your fullname' required/>
          <input type="tel" name='number' className='input' onChange={phoneHandler} value={number} placeholder='Enter your phone number' required/>
          <input type="text" name='email' className='input' onChange={emailHandler} value={email} placeholder='Enter your email or username' />
          <input type="password" name='password' className='input' onChange={passwordHandler} value={password} placeholder='Enter your password' />
          <input type="password" name='confirmPassword' className='input' onChange={confirmPasswordHandler} value={confirmPassword} placeholder='Confirm your password' />
          <button type='submit' className='button'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
