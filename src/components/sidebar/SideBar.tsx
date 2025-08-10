'use client'
import React, { useState } from 'react'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import SelectionField from '../ui/SelectionField'
import { mockLogin } from '@/lib/loggedUsers'
import { mockClassrooms } from '@/lib/classrooms'
import { Home, User, Users, Building , Cog, icons} from 'lucide-react'


function SideBar() {

    const user = mockLogin.user
    const userClassrooms = mockLogin.classes
    const sideBarButtons = [
        {id: 1, name: 'Página Inicial', linkto: '/', icon: Home},
        {id: 2, name: 'Alunos', linkto: '/students', icon: User},
        {id: 3, name: 'Grupos', linkto: '/groups', icon: Users},
        {id: 4, name: 'Instituições', linkto: '/instutions', icon: Building},
        {id: 5, name: 'Configurações', linkto: '/config', icon: Cog}
    ]
    const [selectedButton, setSelectedButton] = useState(0)
    return (
        <aside className='flex flex-col items-center p-8 bg-red-800 w-64 h-screen'>
            <Image src={Logo} alt='CinVoluntario Logo' className='w-32 h-8 mb-2 object-contain'/>
            {
                userClassrooms.map((uc) => (
                    <SelectionField key={uc.id}
                    title={uc.class.name}
                    options={userClassrooms}
                    />
                ))
            }
            <section className='justify-center items-start flex flex-col mt-4'>
                {
                    sideBarButtons.map((sdb) => (
                        <button onClick={() => setSelectedButton(sdb.id)} key={sdb.id} className={`w-56 h-10 rounded-full ${selectedButton === sdb.id ? 'bg-neutral-50 text-red-800 hover:bg-neutral-100 hover:text-red-950' : 'text-neutral-50 hover:bg-red-950'}`}>
                            <Link href={sdb.linkto} className='flex flex-row gap-2 justify-start items-center px-8 text-md'>
                                <sdb.icon size={16}/>
                                {sdb.name}
                            </Link>
                        </button>
                    ))
                }
            </section>
        </aside>
    )
}

export default SideBar