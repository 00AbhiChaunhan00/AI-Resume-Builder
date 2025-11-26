// import React, { useState } from 'react' 
import Header from '../../Header'
import { useEffect,useContext } from 'react'
import {Button} from '@/components/ui/button'
import ResumePreview from '../../Resume/ResumePreview'
import { useParams } from 'react-router-dom'
import APIDATA from '../../DATA/APIDATA'
import { ArrowDown, ArrowUp } from 'lucide-react'; 
import { RWebShare } from "react-web-share";
import { ResumeContext } from "/src/ContextProvider.jsx";
// import '/src/index.css'

const ViewResume = () => {
 
     const {ResumeInfo,setResumeInfo}=useContext(ResumeContext)
     const params=useParams()


  useEffect(()=>{
      GetData();
     },[params.resumeId])
     
      const GetData=()=>{
        APIDATA.GetResumeDetails(params.resumeId)
        .then((res)=>{
             console.log(res.data.data)
             setResumeInfo(res.data.data)
        })
    }
    const HandleInput=()=>{

      window.print()
    }

  return (
<>
    <div id='no-print'>
        <Header/>
      <div className='my-10 mx-10 md:mx-20 lg:max-30' >
        <h2 className='text-center text-2xl font-medium'>Congrats! Your Resume is ready</h2>
        <p className='text-center '>You are ready to download your resume and can share with resume url </p>
        <div className='flex justify-center px-10 my-10'>
          <Button style={{backgroundColor:'#9450FF' ,width:'150px'}}  onClick={HandleInput}>Download <ArrowDown/></Button>
        </div>
        
      </div>
      
    </div>
    <div className='my-10 mx-10 md:mx-20 lg:max-30'>
       <div id='print'>
          <ResumePreview/>
      </div>
    </div>
   
    </>
  )
}

export default ViewResume
