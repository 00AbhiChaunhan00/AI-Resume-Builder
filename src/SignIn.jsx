import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const SignIN = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignIn />
    </div>
  )
}

export default SignIN
