import React from 'react'
import { useLocation } from 'react-router'
import './Home.css'

export default function Home() {

  const state = useLocation()
  return (<div className='homeContainer'>
    <div>hello welcone to the world with displaying this amazing Home pages</div>
    <div>{state.state?state.state.name:null}</div>
    <div>{state.state?state.state.age:null}</div>
    <div>{state.state?state.state.height:null}</div>
  </div>
  )
}
