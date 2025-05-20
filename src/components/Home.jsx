import React, { useState } from 'react'

const Home = () => {

    const [title, setTitle]=useState('');

  return (
    <div>
       <input 
       className='p-3 rounded-2xl'
       type='text'
       placeholder='Enter title:'
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       />
    </div>
  )
}

export default Home