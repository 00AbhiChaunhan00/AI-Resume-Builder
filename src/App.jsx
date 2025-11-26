import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import Header from './Header'
import { Toaster } from "@/components/ui/sonner"

function App() {
  const { user, isLoaded, isSignedIn } = useUser()  // these all are from the clerk 

  if (!isSignedIn && isLoaded) {   // to verify if user is not signed in then go to sign in page
    return <Navigate to="/signIn" />
  }

  return (
    <>
      
      <Header />
      <Outlet />
        <Toaster/> 
        {/* this is toaster message component by shadCN it is used by calling toast and enter the message where we want */}
    </>
  )
}

export default App
