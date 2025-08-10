import React from 'react'
import Link from 'next/link'

type ActivityCardProp = {
    activity: Activity,
    studentId: string
}

function ActivityCard({activity, studentId}: ActivityCardProp) {
  return (
    <Link href={`/students/${studentId}/activities/${activity.id.toString()}`}>
        <div className='flex flex-col w-full h-16 rounded-xs items-start justify-center px-4 bg-neutral-50 drop-shadow-md'>
            <h4 className='text-md'>{activity.title}</h4>
            <h5 className='text-neutral-500 text-sm'>{activity.date.toLocaleDateString()}</h5>
        </div>
    </Link>
  )
}

export default ActivityCard