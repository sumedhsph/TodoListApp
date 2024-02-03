import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

function Home() {
  return (
    <div className='w-9/12 mx-auto bg-indigo-500 p-4'>
        <TodoForm/>
        <Todos/>
    </div>
  )
}

export default Home