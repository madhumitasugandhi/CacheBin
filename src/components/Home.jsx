import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {

    const [title, setTitle]=useState('');
    const [value, setValue]=useState('');
    const [searchParams, setSearchParams]=useSearchParams('');

  return (
    <div>
       <input 
       className='p-3 rounded-2xl mt-2'
       type='text'
       placeholder='Enter title:'
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       />

    </div>
  )
}

export default Home