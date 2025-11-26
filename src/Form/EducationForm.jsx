import React, { useContext, useEffect, useState } from 'react'
import {Input} from '@/components/ui/input'
import { ResumeContext } from "/src/ContextProvider.jsx";
import { Textarea } from "@/components/ui/textarea"
import APIDATA from '../DATA/APIDATA'
import {Button} from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { toast } from "sonner"
import { useParams } from 'react-router-dom'
function EducationForm ()  {
  const[educationList,setEducationLsit]=useState([
    {
     universityName:'',
            startDate:'',
            endDate:'',
            degree:'',
            major:'',
            description:'',
    }
  ])
   const Params=useParams()
  const [loading,setLoading]=useState();
  const {ResumeInfo,setResumeInfo}=useContext(ResumeContext)

  const handleInput=(index,e)=>{
    const newEntries=educationList.slice()
    const {name,value}=e.target 
    newEntries[index][name]=value;
    setEducationLsit(newEntries)
  }
  useEffect(()=>{   // this use effect for the defaultValue of form
    ResumeInfo&&setEducationLsit(ResumeInfo?.education)  // here the education is the data from api strapi
  },[])
  
  const AddNewEducation=()=>{
    setEducationLsit([...educationList,{
       universityName:'',
            startDate:'',
            endDate:'',
            degree:'',
            major:'',
            description:'',
    }])}

  const RemoveEducation=()=>{
    setEducationLsit([...educationList].slice(0,-1))
  }

  const onSave=()=>{
    setLoading(true)
     const data={
      data:{education:educationList}
   }
  APIDATA.UpdateResume(Params?.resumeId,data)
   .then((res)=>{
    // console.log(res);
   setLoading(false)  // after succesfully is make the value of load false so it disapper
    toast("Detailes Added")
  },(err)=>{console.log(err.message);setLoading(false)}
   ) 
  }

  useEffect(()=>{
   setResumeInfo({   // here we set our new data and it will be displayed on preview resume
    ...ResumeInfo,
    education:educationList
   })},[educationList])

  return (
    <div style={{borderColor:'#9450FF'}} className="p-5 shadow-lf rounded-lg border-t-primary border-t-4 m-5">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your Educational detials</p>
       <div>

        {educationList.map((item,index)=>{
          return <div key={index}>
            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg' >
              
              <div className='col-span-2'>
                <label className='text-xs'> University</label>
                <Input defaultValue={item?.universityName} name='universityName' onChange={(e)=>handleInput(index,e)} />
              </div>

               <div>
                  <label className='text-xs'>Start Date</label>
                  <Input defaultValue={item.startDate} type='date' name='startDate' onChange={(e)=>handleInput(index,e)} ></Input>
                </div>
              
                 <div>
                  <label className='text-xs'>End Date</label>
                  <Input defaultValue={item.endDate} type='date' name='endDate' onChange={(e)=>handleInput(index,e)} ></Input>
                </div>

                  <div>
                  <label className='text-xs'>Degree</label>
                  <Input defaultValue={item.degree}  name='degree' onChange={(e)=>handleInput(index,e)} ></Input>
                </div>

                 <div>
                  <label className='text-xs'>Major</label>
                  <Input  name='major' defaultValue={item.major} onChange={(e)=>handleInput(index,e)} ></Input>
                </div>
                     
                <div className='col-span-2'>
                  <label className='text-xs'>Description</label>
                  <Textarea  name='description' defaultValue={item.description} onChange={(e)=>handleInput(index,e)} ></Textarea>
                </div>

              </div>
             <div>
            </div>
          </div>
        })}
       </div>
            <div className='flex justify-between'>
                    <div className='flex gap-2'>
                      <Button style={{backgroundColor:'#F87171'}} onClick={RemoveEducation} >- Remove</Button>
                      <Button onClick={AddNewEducation} className='text-primary' variant='outline'> + Add Education</Button>
                    </div>
                   <Button style={{backgroundColor:'#9450FF'}}  onClick={()=>onSave()} disabled={loading} type='sumbit'>{loading? <LoaderCircle className='animate-spin'/>:"Save"}</Button>
                </div>
    </div>
  )
}
export default EducationForm
