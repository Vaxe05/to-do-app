import { useState } from 'react'
import ToDoList from './Components/TodoList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-page'>
    <ToDoList/>
    </div>
  )
}

export default App
