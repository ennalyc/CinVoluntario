import React from 'react'
import { mockStudentActivities } from '@/lib/studentActivities'
import { mockStudents } from '@/lib/students'
import { mockGroups } from '@/lib/groups'
import { mockLogin } from '@/lib/loggedUsers'
import ActivityCard from '@/components/ui/ActivityCard'

type PageProps = {
    student: string
}

function StudentDetailsPage({params}: {params: PageProps}) { 
    const currentStudent = mockStudents.find(mstd => mstd.user.id.toString() === params.student)
    let studentGroup = null
    if (currentStudent){
        studentGroup = mockGroups.find(stdgrp => stdgrp.students.some(stdnt => stdnt.user.id === currentStudent.user.id))
    }
    const userActivities = mockStudentActivities.filter(useract => useract.student.user.id === currentStudent?.user.id)
    const userActivitiesInClass = userActivities.filter(usract => mockLogin.classes.some(mck => mck.class.id === usract.class.id))
    console.log(userActivities)
    console.log(userActivitiesInClass) 
    return (
            <div className='w-full h-full'>
            <section className='flex flex-row gap-2 justify-center items-center h-56 bg-neutral-200 rounded-2xl'>
                <div className='h-24 w-24 rounded-full bg-neutral-400'/>
                <div>
                    <h3 className='font-semibold text-xl'>{currentStudent?.user.name}</h3>
                    <h6 className='font-medium text-neutral-500 text-lg'>{currentStudent?.user.email}</h6>
                    <div className='mt-2 h-6 w-16 truncate'>
                        {
                        studentGroup && (
                            <p className='text-sm text-center bg-red-800 text-neutral-50 rounded-sm'>{studentGroup.name}</p>
                        )
                        }
                    </div>
                </div>
            </section>
            <section className='px-2'>
                    <h3 className='font-medium text-xl mt-2 mb-2'>Atividades</h3>
                    <div className='flex flex-col gap-2 drop-shadow-md overflow-y-scroll overscroll-contain h-4/12'>
                        {
                            userActivitiesInClass.map((act) => (
                                <ActivityCard key={act.id}
                                activity={act}
                                studentId={params.student}
                                />
                            ))
                        }
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        {
                        userActivitiesInClass.length <= 0 && (
                            <p className='text-neutral-500'>Sem atividades registradas.</p>
                        )
                        }
                    </div>
            </section>
        </div>
        )
}

export default StudentDetailsPage