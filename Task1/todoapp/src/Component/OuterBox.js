import React, { useEffect, useState } from 'react'

function OuterBox() {
 
   
    
    const [arr,setArr]=useState([]);
    const [currText,setText]=useState("");
    const [edit,setEdit]=useState(-1);
    const [editText,setEditText]=useState("")
    
    let idx=0;
    const addToTask=()=>{
        if(currText!=""){
        arr.push(currText)
        setText("");
        }
        saveInLocalStorage();
    }
       
    useEffect(()=>{
        let status=localStorage.getItem("arr")
        if(status!=null){
        let globalArr=JSON.parse(status);
        setArr([...globalArr]);
        }
    },[])
    const changeText=(e)=>{
        setText(e.target.value)
        saveInLocalStorage();
    }
    const deleteElem=(idx)=>{
arr.splice(idx,1);
setArr([...arr]);
saveInLocalStorage()
    }
    const handleEdit=(idx,obj)=>{
    if(idx==edit)
    setEdit(-1);
    else
    setEdit(idx);
    setEditText(obj);
    saveInLocalStorage();
    }
    const saveEdit=(idx)=>{
  arr[idx]=editText;
  setArr([...arr])
  setEditText("");
  setEdit(-1);
  saveInLocalStorage();
    }
    const saveInLocalStorage=()=>{
        localStorage.setItem("arr",JSON.stringify(arr));
        
    }
  
  return (
    <div className=' w-1/3 h-2/3 bg-white border drop-shadow-2xl mt-20 p-1'>
        <div className='w-full bg-sky-800 h-1/6  flex justify-center items-center '><span className='text-4xl font-bold text-white'>Todo App</span></div>
        <div className='w-full bg-white h-1/6  flex justify-center items-center p-2 border-b-4'>
            <input className='w-2/3 h-1/2 mx-2 p-1 border border-2 border-black ' onChange={changeText} value={currText} autoFocus={true}   ></input>
            <button className='w-1/3  bg-sky-800 h-1/2 mx-2 text-white 'onClick={addToTask}>Add To List</button>
        </div>
        
       
      <div className='remainBox   w-full h-4/6 overflow-auto'>
      {
            arr.map((obj,index)=>
        
        <div className=' h-12 flex m-1 drop-shadow drop-shadow-xl border' id={index}>
        <div className='w-1/12  h-full  flex justify-center items-center border-r'><i class="fa-solid fa-circle"></i></div>
        
            
            <div className='w-7/12 h-full  flex justify-center items-center overflow-auto'> 
            {
                (edit!=index)?
            <span className="text-sm overflow-auto">{obj}</span>:
            <input value={editText} autoFocus={true} onChange={(e)=>setEditText(e.target.value)} className="w-full h-full" ></input>
}
            </div>
            
            
            <div className='w-2/12 h-full   flex justify-center items-center text-2xl drop-shadow-2xl'> <i class="fa-solid fa-trash-can" onClick={()=>deleteElem(index)}></i></div>
            
               
            <div className='w-2/12 h-full   flex justify-center items-center drop-shadow-2xl'>
                {
                 (edit!=index)?
                <button className=' bg-sky-800 text-white px-2  text-xl rounded' onClick={()=>handleEdit(index,obj)}>Edit</button>
                :
                <button className='bg-sky-800   px-2 text-xl text-white rounded' onClick={()=>saveEdit(index)}>Done</button>
}
             </div>

            </div>
               )
            }    
        
        
      </div>
 
    </div>
  )
}

export default OuterBox
