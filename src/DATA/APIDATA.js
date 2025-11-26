import axios from "axios";
// const {default: axios}= require("axios")

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":'application/json',
        'Authorization':`Bearer ${API_KEY}` 
    }
})

const CreateResume=(data)=>{
   return axiosClient.post('/api/user-resumes',data) // to create the data in to database
}


const GetResume=(userEmail)=>{
    return axiosClient.get("/api/user-resumes?filters[userEmail][$eq]="+userEmail) // THIS IS for to get the the data of the user which is prensent at time or using that website otherwise it give whole data of api of all users  for this we use filter method of strapi tool
}
const UpdateResume=(id,data)=>{
    return axiosClient.put("/api/user-resumes/"+id,data)
}
const GetResumeDetails=(id)=>{
    return axiosClient.get("/api/user-resumes/"+id+"?populate=*")
}
const DeleteResume=(id)=>{
 return axiosClient.delete('/api/user-resumes/'+id)
}
export default {CreateResume,GetResume,UpdateResume,GetResumeDetails,DeleteResume}