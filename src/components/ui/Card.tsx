import React from 'react'
import Link from 'next/link'

type CardProps = {
    studentCard: Student
}

function Card({studentCard}: CardProps) {
  return (
    <Link href={`/students/${studentCard.user.id.toString()}`}>
      <div className='bg-white w-46 flex flex-row justify-center items-center gap-2 px-2 h-16 rounded-xl drop-shadow-md'>
        <div className='h-10 w-10 rounded-full bg-neutral-300'/>
        <div className='w-30'>
            <h3 className='font-medium text-sm truncate'>{studentCard.user.name}</h3>
            <h4 className='font-normal text-xs text-neutral-500 truncate'>{studentCard.user.email}</h4>
        </div>
      </div>
    </Link>
  )
}

export default Card