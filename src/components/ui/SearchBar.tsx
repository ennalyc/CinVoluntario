import React, { Dispatch, SetStateAction } from 'react'

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

function SearchBar({searchQuery, setSearchQuery}: SearchBarProps) {
  return (
    <input 
        type="text" 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Pesquise por nome ou email'
        className='w-full px-3 rounded-md h-10 focus:border-red-800/60 focus:outline focus:outline-red-800/60 focus:text-red-800/60 bg-neutral-200 border border-neutral-300 text-neutral-400'
    />
  )
}

export default SearchBar