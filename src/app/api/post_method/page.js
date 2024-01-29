'use client'
import {React,useState} from 'react'

export default function Post() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const addUser=async()=>{
let response=await fetch('http://localhost:3000/api/getapistatic',{
  method:"Post",
  body:JSON.stringify({name,age,email})
})
response=await response.json();
console.log(response)
    }
  return (
    <div className='add-user'>
        <h1>Post API making</h1>
        <input type='text' value={name} placeholder='Enter Name:' onChange={(e)=>{setName(e.target.value)}} className='input-field'/>
        <input type='text' value={age} placeholder='Enter Age:'  onChange={(e)=>{setAge(e.target.value)}} className='input-field'/>
        <input type='text' value={email} placeholder='Enter Email:' onChange={(e)=>{setEmail(e.target.value)}} className='input-field'/>
        <button className='btn' onClick={addUser}>Add User</button>
    </div>
  )
}
