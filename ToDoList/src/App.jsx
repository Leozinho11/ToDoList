import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { v4 as uuidv4 } from 'uuid'
import { Cards } from '../TasksCards/Cards';
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

const task = [
  {
      id: uuidv4(),
      content: '',
      isChecked: false
  }
]

const [tasks, setTasks] = useState([]);
const [newTaskContent, setNewTaskContent] = useState('');

function handleCreateNewTask(){
  event.preventDefault()

  setTasks([...tasks, newTaskContent]);
  setNewTaskContent('');
}

function handleTaskContentChange(){
  setNewTaskContent(event.target.value);
} 

function deleteTask(taskToDelete){
  const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
  })
  setTasks(tasksWithoutDeletedOne);
}

 export function App() {

  return (
    <div className="App">
      <Header />
        <div>
            <form className={styles.form} onSubmit={handleNewTask}>
                <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
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
                        {task.map (tasks =>{
                            return(
                                <Cards 
                                key={tasks.id}
                                content={tasks.content}
                                isChecked={tasks.isChecked}
                                onDeleteTask={deleteTask}
                                />
                            )
                        })}
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
