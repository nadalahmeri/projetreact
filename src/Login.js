import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Login = ({setClick}) => {
    const[login,setLogin]=useState("")
  return (
    <div>
        <Card className='ca' style={{ width: '20rem' }}>
     
      <Card.Body>
        <Card.Title>Login</Card.Title>
      
        <input type="text" placeholder='email' onChange={(e)=>setLogin(e.target.value)}></input>
       
        <input type="password" placeholder='password' onChange={(e)=>setLogin(e.target.value)}></input>
        
       

      </Card.Body>
      <Button variant="primary" onClick={()=>login.length>0 ?setClick(true):alert("pls login")}>login</Button>
      

    </Card>
    </div>
  )
}

export default Login