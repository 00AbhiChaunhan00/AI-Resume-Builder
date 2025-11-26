import React, { useEffect, useState } from 'react'
import Header from './Header'
import AddResume from '/src/Resume/AddResume.jsx'
import APIDATA from '/src/DATA/APIDATA.js'
import ResumeCard from './Resume/ResumeCard'
import { useUser } from '@clerk/clerk-react'
function Dashboard() {
const {user}=useUser()
const [resumeList,setResumeList]=useState([])

useEffect(()=>{
if(user)GetResumeData();
},[user]) // [] because whenever we get the new data it updates by refresh

// This line extracts the email address of the currently logged-in user from Clerk’s user object. 
const GetResumeData=()=>{   
  const data=user?.primaryEmailAddress?.emailAddress
  APIDATA.GetResume(data) //It’s passed to the backend to get that specific person’s stored resumes.
  .then((resp)=>
  {
    setResumeList(resp.data.data)
    // console.log(resp.data)
  })
  .catch(err=>err.message)
}

  return (
 <>
        <div className='p-10 md:px-20 lg:px-32'>
  <h1 className='font-bold text-3xl'>My Resume</h1>
  <p className='text-xl '>Start creating your resume</p>

  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
<AddResume/>
{/* here we are getting the data in the form of array by map filter  */}
{resumeList.length>0&&resumeList.map((resume,index)=>{  // by the resume parameter we get our the details of the exact smae id
   return <ResumeCard key={index} resume={resume} refreshData={GetResumeData} />
})}
  </div>
  </div>
  </>
  )
}

export default Dashboard
