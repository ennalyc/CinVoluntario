'use client'
import React, { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

function SelectionField({title, options}: {title: string, options: Classroom[]}) {
    const [toggleSelection, setToggleSelection] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<Classroom | null>(null)

    const toggleClose = (choosen: Classroom) => {
        setToggleSelection(false),
        setSelectedOption(choosen)
    }

    return (
        <div>
            <div onClick={() => setToggleSelection(!toggleSelection)} className='bg-neutral-50 text-red-800 text-md w-56 h-10 font-medium flex flex-row items-center justify-start gap-1 px-2 rounded-lg'>
                {toggleSelection ? <ChevronDown /> : <ChevronRight />}
                <p className='truncate'>{title}</p>
            </div>
            {
                toggleSelection && (
                    <ul className='bg-neutral-100 flex flex-col gap-2 rounded-lg mt-2'>
                        {
                            options.map((opt) => (
                                <li onClick={() => toggleClose(opt)} key={opt.class.id} className='flex justify-center items-center w-56 h-8 hover:bg-red-800 hover:text-neutral-50 px-2'>
                                    <p className='truncate text-sm'>{opt.class.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                )  
            }
        </div>
    )
}

export default SelectionField