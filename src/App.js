import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      content: value,
      id: uuid(),
    }
    if(value === '') {
      alert("Please Enter Some Valid Value");
    }
    else {
      setTodos([...todos, todoObj]);
      setValue('')
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    const newTodos = [...todos];

    let todoObjIndex = newTodos.findIndex((element) => {
      return element.id === id;
    });
    newTodos.splice(todoObjIndex, 1);
    setTodos(newTodos);
  }

  return (
    <div className='container mx-auto w-full'>
      <h1 className='text-center my-5 text-2xl font-bold'>React Todo Application</h1>
      <form onSubmit={handleSubmit} className='w-[90%] md:w-full mx-auto'>
        <div className='my-5'>
          <input className='border-2 outline-none px-5 py-3 rounded-md w-full text-lg' placeholder='Enter Todo Item' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className='my-5'>
          <button type='submit' className='bg-[#3944f7] text-[#ffffff] text-xl rounded-md w-full px-5 py-3 capitalize font-bold'>add todo</button>
        </div>
      </form>

      <hr />
      <div className='w-[90%] md:w-full mx-auto'>
        {
          todos.map((todoObj) => {
            return(
              <TodoItem key={todoObj.id} todoObj={todoObj} handleDelete={handleDelete} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App