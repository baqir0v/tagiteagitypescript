import { ChangeEvent, useState } from 'react'
import './App.css'
import { todos } from './type'

function App() {
  const [count, setCount] = useState<number>(0)
  const [todo, setTodo] = useState<todos[]>([])
  const [inp, setinp] = useState("")
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinp(e.target.value)
  }

  const addTodo = () => {
    setTodo([...todo, { id: Date.now(), name: inp, completed: true }])
    setinp("")
  }

  const removeTodo = (itemId:number)=>{
     setTodo(todo.filter((i)=>i.id !== itemId))
  }

  const editTodo = (itemId:number)=>{
    const find = todo.find((i)=>i.id === itemId)
    if (find) {
      setinp(find.name)
    }
  }
  const saveTodo = ()=>{
    setinp("")
  }
  return (
    <>
      <span>{count}</span>
      <button onClick={handleIncrement}>Alpay</button>
      <button onClick={handleDecrement}>Akif</button>
      <div>
        <form action="#">
          <input value={inp} type="text" onChange={handleChange} />
          <button onClick={addTodo}>Axhmed</button>
        </form>
      </div>
      <div>
        {todo.map((item) => (
          <ul key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => removeTodo(item.id)}>Sil</button>
            <button onClick={() => editTodo(item.id)}>Edit</button>
          </ul>
        ))} 
      </div>
    </>
  )
}

export default App
