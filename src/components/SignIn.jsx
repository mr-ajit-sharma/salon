import React, { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    // setEmail( e.target.value)
    setPassword(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('')
  }
  return (
    <div className='log-main'>
      <div className='log h-50'>
        <h1>SignIn</h1>
        <form action="" className='form h-50' onSubmit={submitHandler}>
          <input type="text" name='email' className='input' onChange={emailHandler} value={email} placeholder='Enter your email or username' />
          <input type="text" name='password' className='input' onChange={passwordHandler} value={password} placeholder='Enter your password' />
          <button type='submit' className='button'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn