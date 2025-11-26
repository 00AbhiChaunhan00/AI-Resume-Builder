import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { useUser,UserButton } from '@clerk/clerk-react'
function Header(){
  const{user,isSignedIn}=useUser()
  return (
    <div className='p-3 px-5 flex justify-between shadow-md' >

<div className="flex items-center justify-between ">
  <img
    src="/src/assets/HeaderLogo.svg"
    alt="Main Logo"
    className="w-12 h-12 object-contain"
  />

  <img
    src="/src/assets/resume-logo.png"
    alt="Resume Logo"
    className=" ml-1 w-65 h-20 object-contain"
  />
</div>
     
           
        {isSignedIn ? 
        <div className='flex gap-2 items-center'>
          <Link to={"/dashboard"}><Button style={{backgroundColor:'#9450FF'}}  >Dashboard</Button></Link>
        
           <UserButton/>
        </div> :
        <Link to={"/SignIn"}>
     <Button>Get Started</Button></Link>
     }
    
    </div>
  )
}

export default Header
