import React from 'react'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todoObj, handleDelete }) => {
  return (
    <div className="flex items-center justify-between border-2 my-2 px-3 py-5">
        <p>{todoObj.content}</p>
        <span onClick={() => handleDelete(todoObj.id)} className='cursor-pointer'> <BsTrash/> </span>
    </div>
  )
}

export default TodoItem