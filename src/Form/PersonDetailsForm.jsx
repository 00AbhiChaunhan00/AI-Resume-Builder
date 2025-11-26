import React, { useContext, useState } from 'react'
import { ResumeContext } from "/src/ContextProvider.jsx";
import {Input} from '@/components/ui/input' 
import {Button} from '@/components/ui/button'
import { useParams } from 'react-router-dom'
import APIDATA from '../DATA/APIDATA'
import { LoaderCircle } from 'lucide-react'
import { toast } from "sonner"

function PersonDetailsForm() {
     const params=useParams()
     const[formData,setFormData]=useState() // we make to here to send the form data to api
     const [loading,setlodaing] =useState(false)


     const { ResumeInfo, setResumeInfo } = useContext(ResumeContext)
     const handleInput=(e)=>{
      
    const {name,value}=e.target;
    setFormData({   // make this to send only these data enteries field to server
        ...formData,
        [name]:value
    })
    setResumeInfo({   // to set the resumeInfo 
        ...ResumeInfo,[name]:value // make a dynamic value 
    })
 }
const onSave=(e)=>{
   e.preventDefault();
   setlodaing(true) // when we press the button before saving it load
   const data={
    data:formData
   }
   APIDATA.UpdateResume(params?.resumeId,data)
   .then((res)=>{
    // console.log(res);
    setlodaing(false)  // after succesfully is make the value of load false so it disapper
   
    toast("Detailes Added")
  },(err)=>{
    toast("Server Error")
    // console.log(err.message);
    setlodaing(false)}
   ) 
 }
  return (
    <div style={{borderColor:'#9450FF'}} className="p-5 shadow-lf rounded-lg border-t-primary border-t-4 m-5">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with the basic information</p>
   
   <form onSubmit={onSave}>
    <div className='grid gird-cols-2 mt-5 gap-3'>
        <div>
            <label className='text-sm'>First Name</label>
              <Input required defaultValue={ResumeInfo?.firstName} name='firstName' onChange={handleInput} />
        </div>
          <div>
            <label className='text-sm'>Last Name</label>
              <Input required name='lastName' defaultValue={ResumeInfo?.lastName} onChange={handleInput} />
        </div>
         <div className='col-span-2'>
            <label className='text-sm'> Job Title</label>
              <Input required name='jobTitle' defaultValue={ResumeInfo?.jobTitle} onChange={handleInput} />
        </div>
         <div className='col-span-2'>
            <label className='text-sm'>Address</label>
              <Input required name='address' defaultValue={ResumeInfo?.address} onChange={handleInput} />
              {/* <Input required name='address'  onChange={handleInput} /> */}
        </div>
         <div className='col-span-2'>
            <label className='text-sm'>Phone</label>
              <Input required name='phone' defaultValue={ResumeInfo?.phone} onChange={handleInput} />
        </div>
         <div className='col-span-2'>
            <label className='text-sm'>E-mail</label>
              <Input required name='email' defaultValue={ResumeInfo?.email} onChange={handleInput} />
        </div>
    </div>
    <div className='mt-3 flex justify-end'>
        <Button style={{backgroundColor:'#9450FF'}} disabled={loading} type='sumbit'>{loading? <LoaderCircle className='animate-spin'/>:"Save"}</Button>
    </div>
   </form>
</div>
  )
}

export default PersonDetailsForm
