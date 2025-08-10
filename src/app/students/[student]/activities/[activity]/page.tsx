import React from 'react'
import { mockStudentActivities } from '@/lib/studentActivities'

type ActivityPageParams = {
    studentId: string,
    activity: string
}

function ActivityPage({params}: {params: ActivityPageParams}) {
    
    const currentActivity = mockStudentActivities.find(curact => curact.id === params.activity)
    console.log(currentActivity)
    return (
    <div className='w-full h-full'>
        <section className='h-32 w-full'>
            <h1 className='font-bold text-2xl'>{currentActivity?.title}</h1>
            <h3 className='text-neutral-500 text-md font-medium'>{currentActivity?.date.toLocaleDateString()}</h3>
            <p className='text-neutral-700'>{currentActivity?.description}</p>
        </section>
    </div>
  )
}

export default ActivityPage