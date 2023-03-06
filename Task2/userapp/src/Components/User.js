import React, { useState } from 'react'
import './User.css'
function User() {
const [arr,setArr]=useState([]);
const link="https://reqres.in/api/users?page=1";
const [done,setDone]=useState(false);

const getUsers=()=>{
   
setDone(true);

    fetch(link)
    .then((response) => response.json())
    .then((data) => {
        let localArr=data.data;
         setArr([...localArr])
         setTimeout(()=>{

         },4000)
    }
       ).then(()=>{
        console.log(arr.length)
      
        setDone(false);
       })
         }  
    
   
    

  return (
    <div className='w-full h-full  overflow-hidden'>
      <div className='h-20 w-full  bg-blue-900 flex justify-between'>
        <div className='h-20 w-1/6 bg-blue-900 flex justify-center items-center'>
            <span className='w-2/3 h-1/2 bg-green-200 flex items-center justify-center text-blue-900 rounded text-xl font-bold'>LetsGrowMore</span>
        </div>
        <div className='h-20 w-1/6 bg-blue-900 flex items-center justify-center' >
        <button className='w-1/2 h-1/2 bg-green-200 flex items-center justify-center text-blue-900 rounded text-xl font-bold' onClick={()=>getUsers()}>Get Users</button >
        </div>
        
      </div>
      {
      (done==false)?
      <div   v className='w-full bg-white py-4   flex flex-wrap justify-center' style={{height:"inherit",alignContent: "stretch"}}>
        {
     
        
         
        arr.map((obj,index)=>{
            return (
                (index<=2)?
        <div className='h-2/5 w-1/4 border mx-4 mt-1 drop-shadow-2xl '>
            {/* {console.log(index)} */}
            <div className='w-full h-2/3 bg-grey flex justify-center items-center'> 
            <div className=' w-1/3 h-2/3 bg-yellow-200  rounded-full'>
                <img className='rounded-full 'src={obj.avatar}></img>
            </div>
                </div>
                <div className='w-full h-1/6 bg-white flex items-center justify-center  border'>
                    <span className='m-1'>Name:</span>
                    <span className='m-1'>{obj.first_name}</span>
                    <span className='m-1'>{obj.last_name}</span>
                </div>
                <div className='w-full h-1/6 bg-blue-200 bg-white  border'  >
                    <span className='m-1'>Email:</span>
                    <span className='m-1'>{obj.email}@gmail.com</span>
                </div>
        </div>:
            <div className='h-2/5 w-1/4  border mx-4 mb-2 drop-shadow-2xl '>
            {/* {console.log(index)} */}
            <div className='w-full h-2/3 flex justify-center items-center'> 
            <div className=' w-1/3 h-2/3 bg-yellow-200  rounded-full'>
                <img className='rounded-full 'src={obj.avatar}></img>
            </div>
                </div>
                <div className='w-full h-1/6 bg-green-200 flex items-center justify-center bg-white  border'>
                    <span className='m-1'>Name:</span>
                    <span className='m-1'>{obj.first_name}</span>
                    <span className='m-1'>{obj.last_name}</span>
                </div>
                <div className='w-full h-1/6 bg-blue-200 bg-white  border'>
                    <span className='m-1'>Email:</span>
                    <span className='m-1'>{obj.email}@gmail.com</span>
                </div>
        </div>
            )
             })
 } 
    
        
        
      </div>
      :
      <div   v className='w-full bg-white py-4   flex flex-wrap justify-center' style={{height:"inherit",alignContent: "stretch"}}>
        <div class="loader "></div>
        </div>
}
    </div>
  )
}

export default User
