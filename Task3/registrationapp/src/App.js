import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

 
  const [arr,setArr]=useState([
    {
      "Name":"King rocco",
      "Email":"kingrocco@gmail.com",
      "Website":"www.kingrocco.com",
      "Image":"https://wikibio.in/wp-content/uploads/2021/12/King.jpg",
      "Gender":"Male",
      "skills":["Java","HTML","CSS"]

    },
    
  ])
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtu4QExJhnyTzWb3D3BqPn5_6S0CfQEpMobQ&usqp=CAU
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZne42mKoFcvuTsV_bhzbEAPbkjAjaOrHQA&usqp=CAU
  useEffect(()=>{
    let localArr=localStorage.getItem("arr1");
    if(localArr!=null)
    {
      let objArr=JSON.parse(localArr);
      setArr([...objArr]);
    }
  },[])
  const saveInStorage=()=>{
    localStorage.setItem("arr1",JSON.stringify(arr));
  }

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [Website,setWebsite]=useState("");
  const [image,setImage]=useState("");
  const [gender,setGender]=useState("");
  const [skills,setSkills]=useState([]);
  const [java,setJava]=useState(false);
  const [clan,setcLan]=useState(false);
  const [python,setPython]=useState(false);
  
  const handleSubmit=()=>{
    let localArr=[];
    if(java==true)
    localArr.push("java");
    if(clan==true)
    localArr.push("C++")
    if(python==true)
    localArr.push("Python");
      arr.push({
        "Name":name,
        "Email":email,
        "Website":Website,
        "Image":image,
        "Gender":gender,
        "skills":[...localArr],

        
      })
      setArr([...arr])
      setName("");
      setEmail("");
      setWebsite("");
      setImage("");
      setGender("");
      setSkills([]);
      document.getElementById("first").checked=false;
      document.getElementById("second").checked=false;
      document.getElementById("java").checked=false;
      document.getElementById("Clan").checked=false;
      document.getElementById("python").checked=false;
      saveInStorage();

  }
  const handleClear=()=>{
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
    setGender("");
    setSkills([]);
    document.getElementById("first").checked=false;
    document.getElementById("second").checked=false;
    document.getElementById("java").checked=false;
    document.getElementById("Clan").checked=false;
    document.getElementById("python").checked=false;
  }
  const handleGender=(gen)=>{
if(gen=="Male")
{
  document.getElementById("second").checked=false
}
else
document.getElementById("first").checked=false;
setGender(gen);
  }
  return (
    <div className="App w-full h-screen overflow-hidden ">
      <div className='h-16 w-full bg-blue-900 mt-2 text-white  flex justify-center items-center'><span className='text-2xl'>Student Enrollment Form</span></div>
      <div className=' w-full bg-green-200 flex'style={{height:"inherit"}}>
        <div className='First w-1/2 h-full bg-white flex justify-center border border-4'>
          <div className='w-2/3 h-96  mt-10'>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center' >
              <span>Name:</span>
              <input className='w-1/2 h-1/2 rounded mx-1 px-1'  onChange={(e)=>setName(e.target.value)} value={name}></input>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
            <span>Email:</span>
              <input className='w-1/2 h-1/2 rounded mx-1 px-1' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
            <span>Website</span>
              <input className='w-1/2 h-1/2 rounded mx-1 px-1'onChange={(e)=>setWebsite(e.target.value)} value={Website} ></input>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
            <span>Image Link:</span>
              <input className='w-1/2 h-1/2 rounded mx-1 px-1'  onChange={(e)=>setImage(e.target.value)} value={image}></input>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
            <span className='mr-2'>Gender : </span>
              <input type="checkbox" className='mx-2 ' id="first" onClick={()=>handleGender("Male")} >
                
              </input>
              <label>Male</label>
              <input type="checkbox" className='mx-2 ' id="second" onClick={()=>handleGender("FeMale")}>
                
              </input>
              <label>Female</label>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
            <span className='mr-2'>Skills:</span>
            <input type="checkbox" id="java" className='mx-2 java' onChange={()=>setJava(!java)}>
                
                </input>
                <label>Java</label>
                <input type="checkbox" id="Clan" className='mx-2  Clan  'onChange={()=>setcLan(!clan)}>
                  
                </input>
                <label>C++</label>
                <input type="checkbox" id="python" className='mx-2 python' onChange={()=>setPython(!python)} >
                  
                </input>
                <label>Python</label>
            </div>
            <div className='w-full h-14 bg-blue-200 my-1 flex pl-4 items-center'>
       <button className='bg-white mx-2 p-1 rounded bg-sky-700 text-white px-2' onClick={()=>handleSubmit()}>Enroll Students</button>
       <button className='bg-white mx-2 p-1 rounded bg-sky-700 text-white px-2 ' onClick={()=>handleClear()}> Clear</button>
            </div>
         
          </div>
        </div>
        <div className='Second w-1/2 h-full bg-blue-200'>
          <div className='Sfirsthalf h-20 flex justify-center items-center w-full bg-sky-900 text-white text-2xl'><span>Enrolled Students</span></div>
          <div className='Ssecondhalf w-full bg-white p-4 flex flex-col  items-center  ' style={{height:"inherit"}}>
            <div className='w-2/3 h-2/3 overflow-y-scroll    bg-stone-200'>
        {
          arr.map((obj,index)=>{
            return (
           <div className=' w-full h-40 bg-white my-2 flex border'>
            <div className='Descriptiom w-2/3 h-full bg-yellow-200 drop-shadow-2xl' >
              <div className='h-1/6 w-full bg-sky-900 text-white border'>
                <span>Description</span>
              </div>
              <div className='h-5/6 w-full bg-white flex flex-col flex-start border '>
                <div className='h-1/5 w-full flex flex-start pl-2 '><span className='inline '>{obj.Name}</span></div>
                <div className='h-1/5 w-full flex flex-start pl-2 '><span>{obj.Email}</span></div>
                <div className='h-1/5 w-full flex flex-start pl-2 '><span>{obj.Website}</span></div>
                <div className='h-1/5 w-full flex flex-start pl-2 '><span>{obj.Gender}</span></div>
                <div className='h-1/5 w-full flex flex-start pl-2 '>
                {
                  
                  obj.skills.map((obj1)=>{
                    return (
                <span>{obj1+","}</span>
                    )
              })
          }
          </div>
              </div>
            </div>
            <div className='Image w-1/3 h-full bg-white'>
            <div className='h-1/6 w-full bg-sky-900 text-white border'>
              <span>Image</span>
            </div>
            <div className='h-5/6 w-full p-1'>
              <img className='w-full h-full  bg-orange-200' src={obj.Image}></img>
            </div>
            </div>
           </div>
            )
          }) 
        }
          
           
           </div>
          </div>
        </div>
         </div>
  
    </div>
  );
}

export default App;
