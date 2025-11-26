import * as React from "react";
import Dashboard from "./Dashboard";
import ViewResume from "./my-Resume/[resumeId]/view";
import SignIN from "./SignIn";
import Home from "./Home";
import App from "./App";
import ResumeContextProvider from "./ContextProvider";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import "./index.css";
import Edit from "./Resume/[resumeId]/Edit";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
   
    element:<App/>,
    children:[

     {
      path:'/dashboard',
      element:<Dashboard/>
     },

     {
      path:'/dashboard/resume/:resumeId/edit',
      element:<Edit/>
     }

    ]

  },

  {
      path:'/',
      element:<Home/>
     },
  {
    path:"/signIn",
    element:<SignIN/>
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <ResumeContextProvider>
      <RouterProvider router={router} />
    </ResumeContextProvider>
  </ClerkProvider>

);
