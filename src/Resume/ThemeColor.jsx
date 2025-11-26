import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from '@/components/ui/button' 
import {LayoutGrid} from 'lucide-react'
import  {useContext } from 'react'
import APIDATA from '../DATA/APIDATA'
import { ResumeContext } from "/src/ContextProvider.jsx";
import { useParams } from 'react-router-dom'
import { toast } from "sonner"
const ThemeColor = () => {
     const { ResumeInfo, setResumeInfo } = useContext(ResumeContext)
const [selectcolor,setSelectColor]=useState();
const params=useParams()
     const colorselect=(color)=>{
        setSelectColor(color)
        setResumeInfo({
            ...ResumeInfo,
            themeColor:color
        })
        const data={
            data:{
                themeColor:color
            }
        }
        APIDATA.UpdateResume(params?.resumeId,data).then((res)=>{
           console.log(res.data)
  toast("Theme added")
        })
     }
   const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
  "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
  "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
  "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
];
  return (
    
      <Popover>
  <PopoverTrigger>
     <Button style={{backgroundColor:'#9450FF'}}  className=' bg-purple-600 hover:bg-purple-700 px-3 text-white flex gap-2' variant='outline' size='sm'> <LayoutGrid/>Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>

    <div className='grid grid-cols-5 gap-3 '>
        {colors.map((items,key)=>{
    return <div onClick={()=> colorselect(items)} className={`h-10 w-10 rounded-full cursor-pointer hovrer:border-black border ${selectcolor==items&& 'border border-black'} `} style={{background:items}} key={key}>
    </div> 

  })}</div></PopoverContent>
</Popover>
   
  )
}

export default ThemeColor
