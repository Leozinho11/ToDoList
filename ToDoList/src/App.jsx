import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { v4 as uuidv4 } from 'uuid';
import {Cards} from './components/TasksCards/Cards';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';


const task = [
  {
    id: uuidv4(),
    content: 'Algo',
    isChecked: false
  },
  {
    id: uuidv4(),
    content: 'Outra coisa'
  }
]



 export function App() {
const [tasks, setTasks] = useState([]);
const [newTaskContent, setNewTaskContent] = useState('vjvyvyv');

function handleCreateNewTask(){
  event.preventDefault()

  setTasks([...tasks, newTaskContent]);
  setNewTaskContent('');
}

function handleTaskContentChange(){
  setNewTaskContent(event.target.value);
}

function deleteTask(){
  const tasksWithoutDeletedOne = tasks.filter(task => {
    return task !== taskToDelete
  })
  setTasks(tasksWithoutDeletedOne);
}

  return (
    <div className="App">
      <Header />
        <div>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                onChange={handleTaskContentChange} 
                />

                <button type='submit'>
                     Criar 
                     <PlusCircle size={20}/>
                </button>
            </form>

            <div className={styles.task}>

                <header className={styles.taskInfo}>
                    <p className={styles.createdTasksLabel}>
                    Tarefas Criadas <span className={styles.createdTasksCounter}>5</span>
                    </p>

                     <p className={styles.completedTasksLabel}>
                    Concluídas<span className={styles.completedTasksCounter}>2 de 5</span>
                    </p>
                </header>

                 <div className={styles.taskBox}>
                    <div className={styles.taskContent}>
                    </div>
                 </div>
            </div>
        </div>
    </div>

    
  )
}
