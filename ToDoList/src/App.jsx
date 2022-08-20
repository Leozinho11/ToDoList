import { useState } from 'react'
import styles from './App.module.css'
import {PlusCircle} from 'phosphor-react'
import { Header } from './components/Header/Header'

 export function App() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleNewTask () {
      event.preventDefault()

      setTask([...task, newTask]);
      
  }

  return (
    <div className="App">
      <Header />

      <form className={styles.form} onSubmit={handleNewTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
            Criar 
            <PlusCircle size={20}/>
        </button>
      </form>

    </div>
  )
}


