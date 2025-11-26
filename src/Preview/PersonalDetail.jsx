import React from 'react'

const PersonalDetail = ({ResumeInfo}) => {
  return (
    <div>
      <h2 style={{color:ResumeInfo?.themeColor}} className='font-bold text-center text-xl'>{ResumeInfo?.firstName} {ResumeInfo?.lastName}</h2>
      <h2 className='text-center text-sm font-medium'>{ResumeInfo. jobTitle}</h2>
      <h2 className='text-center font-normal text-xs' style={{color:ResumeInfo?.themeColor}}>{ResumeInfo?.address}</h2>
     <div className='flex justify-between'>
     <h2 className='text-center font-normal text-xs' style={{color:ResumeInfo?.themeColor}}>{ResumeInfo?.phone}</h2>
      <h2 className='text-center font-normal text-xs' style={{color:ResumeInfo?.themeColor}}>{ResumeInfo?. email}</h2>
     </div>
     <hr className=' my-2 border-[3px]' style={{borderColor:ResumeInfo?.themeColor}}/>
    </div>
  )
}
export default PersonalDetail
