import React, { useState,useContext, useEffect } from 'react'
import {Input} from '@/components/ui/input'
import { ResumeContext } from "/src/ContextProvider.jsx";
import {Button} from '@/components/ui/button'
import  TextEditor from '../components/TextEditor'
import { useParams } from 'react-router-dom'
import APIDATA from '../DATA/APIDATA'
import { LoaderCircle } from 'lucide-react';
import { toast } from "sonner"
const formField={
          title:'',
            companyName:'',
            city:'',
            state:'',
            startDate:'',
            endDate:'',
            workSummery:' '
}
function ProfessionalForm(){

      const Params=useParams()
      const [experienceList, setExperienceList] = useState([{ ...formField }]); // we make this {... } beacuse for every list we get the new data otherwise at first stage it game the same
      const { ResumeInfo, setResumeInfo } = useContext(ResumeContext)
      const[loading,setLoading]=useState(false)
      
   const handleInput=(index,e)=>{
      const NewEntries=experienceList.slice();
      const {name,value}=e.target 
      NewEntries[index][name]=value
      setExperienceList(NewEntries)  // here we set  our etries 
} 

useEffect(()=>{   // this use effect for the defaultValue of form
  ResumeInfo&&setExperienceList(ResumeInfo?.experience)  // here the experance is the data from api strapi
},[])

  const AddNewExperince=()=>{
      setExperienceList([...experienceList,{...formField}]) 
  }
  const RemoveExperince=()=>{
     setExperienceList(experienceList=>experienceList.slice(0,-1))  // by slicing it remove the last list
  }

  const handleEditor = (index, name, text) => { 
    const NewEntries = [...experienceList];
    NewEntries[index][name] =text;
    setExperienceList(NewEntries);
  };

  const onSave=()=>{
    setLoading(true);
    
    const data = { 
        data: {
            experience: experienceList
        }
    };
    
    APIDATA.UpdateResume(Params?.resumeId, data)
    .then((res)=>{
        console.log("Update Successful:", res);
        setLoading(false);
        toast("Details Added");
    }, (err)=>{
        // console.error("API Update Failed:", err);
        toast("Server Error")
        setLoading(false);
    }) 
}

  useEffect(()=>{
   setResumeInfo({   // here we set our new data and it will be displayed on preview resume
    ...ResumeInfo,
    experience:experienceList
   })},[experienceList])

  return (
    
  <div>
    <div style={{borderColor:'#9450FF'}} className="p-5 shadow-lf rounded-lg border-t-primary border-t-4 m-5">
      <h2 className="font-bold text-lg">Professional Experience Details</h2>
      <p>Add you experience</p>
      <div>{experienceList.map((item,index)=>{
        return <div key={index}>
        <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
           <div>
    <label className='text-xs'>Position Title</label>
    <Input defaultValue={item.title}  name='title' onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

   <div>
    <label className='text-xs'>Compnay Name</label>
    <Input defaultValue={item.companyName} name='companyName' onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

   <div>
    <label className='text-xs'>City</label>
    <Input defaultValue={item.city} name='city' onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

   <div>
    <label className='text-xs'>State</label>
    <Input name='state' defaultValue={item.state} onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

   <div>
    <label className='text-xs'>Start Date</label>
    <Input type='date' defaultValue={item.startDate} name='startDate' onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

   <div>
    <label className='text-xs'>End Date</label>
    <Input type='date' name='endDate' defaultValue={item.endDate} onChange={(e)=>handleInput(index,e)} ></Input>
  </div>

<div className=' my-2 col-span-2 border rounded p-2 bg-white'>
  <TextEditor defaultValue={item?.workSummery}  onEditorChange={(text)=>handleEditor(index,'workSummery',text)} />
</div>
  </div>
        </div>

      })}</div>
      
    <div className='flex justify-between'>
      <div className='flex gap-2'>
        <Button  style={{backgroundColor:'#F87171'}} onClick={RemoveExperince} >- Remove</Button>
        <Button onClick={AddNewExperince} className='text-primary' variant='outline'> + Add Experrience</Button>
      </div>
         <Button style={{backgroundColor:'#9450FF'}} onClick={()=>onSave()} disabled={loading} type='sumbit'>{loading? <LoaderCircle className='animate-spin'/>:"Save"}</Button>
    </div>
    </div>
</div>
  )
}

export default ProfessionalForm
