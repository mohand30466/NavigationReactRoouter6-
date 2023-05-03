import React from 'react'
import { useLoaderData } from 'react-router'
import { useNavigate } from 'react-router'
import './data.css'

 const newdata=[
    {name:"mohand",
age:32,
height:174,
weight:70,
color:"black",
nationality:"sudan",
id:1

},
{name:"mohaned",
age:32,
height:174,
weight:70,
color:"black",
nationality:"sudan",
id:2

},
{name:"ali",
age:32,
height:174,
weight:70,
color:"black",
nationality:"sudan",
id:3

},
{name:"adam",
age:32,
height:174,
weight:70,
color:"black",
nationality:"sudan",
id:4

},
]

export const mydata =()=>{
    return newdata
}


export  function Data() {
  const navigate = useNavigate()

    const usedata= useLoaderData()
  return (

  <div className='dataContainer'>Data
        {usedata.map((i)=><p onClick={e=>navigate("/home",{state:i})}> {i.name} </p>)}
       
    </div>
  )
}
