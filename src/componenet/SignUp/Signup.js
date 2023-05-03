import React from 'react'
import { useNavigate } from 'react-router'
import './signup.css'

export default function Signup() {
  const navigate = useNavigate()
  return (<div className='signupContainer'>
  
  <div> hey there this is the sign in pages Signup</div>
  <div onClick={e=>navigate('/signin')}>if you already have account click to sign in</div>
  </div>
  )
}
