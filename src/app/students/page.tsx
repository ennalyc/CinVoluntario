'use client'
import React, { useState } from 'react'
import SearchBar from '@/components/ui/SearchBar'
import { mockClassrooms } from '@/lib/classrooms'
import { mockLogin } from '@/lib/loggedUsers'
import Card from '@/components/ui/Card'

function StudentPage() {
    const [searchInput, setSearchInput] = useState<string>('')
    const currentClassroom = mockClassrooms.find(cur => mockLogin.classes.includes(cur))
    const studentsInClassroom = currentClassroom?.enrolledStudents
    const filterStudents = studentsInClassroom?.filter(inclass => inclass.user.email.toLowerCase().includes(searchInput.toLowerCase()) || inclass.user.name.toLowerCase().includes(searchInput.toLowerCase()))
    return (
    <div className='w-full h-full'>
        <h1 className='text-2xl font-bold mb-2'>Alunos</h1>
        <SearchBar
        searchQuery={searchInput}
        setSearchQuery={setSearchInput}
        />
        <div className='mt-4 grid grid-cols-5 gap-3 max-h-10/12 accent-red-800 overflow-y-scroll overscroll-contain'>
            {
            searchInput === '' ? 
            studentsInClassroom?.map((stdinclass) => (
                <div key={stdinclass.user.id}>
                    <Card
                    studentCard={stdinclass}
                    />
                </div>
            ))
            :
            filterStudents?.map((filter) => (
                <div key={filter.user.id}>
                    <Card
                    studentCard={filter}
                    />
                </div>
            ))
        }
        </div>
    </div>
  )
} 

export default StudentPage