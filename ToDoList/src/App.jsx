import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header/Header';
import {Cards} from './components/TasksCards/Cards';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { useState } from 'react';




export function App() {


const [tasks, setTasks] = useState([]);
const [newTaskContent, setNewTaskContent] = useState('');
let [checkedTasksCounter, setCheckedTasksCounter] = useState(0)


const isNewTaskContentEmpty = newTaskContent.length===0;

const taskCount = tasks.length




function handleCreateNewTask(){
  event.preventDefault()
  setTasks([...tasks, newTaskContent]);
  setNewTaskContent('')
}

function handleTaskContentChange(){
  setNewTaskContent(event.target.value);
}

function deleteTask(taskToDelete){
  const tasksWithoutDeletedOne = tasks.filter(task => {
    return task !== taskToDelete; 
  })
  setTasks(tasksWithoutDeletedOne)
}

function countChecked(isChecked = 0, num = 0, setNum = 0){
 const check = document.getElementsByName('check');
    
      for(let i=0; i<check.length;i++){
      if(check[i].checked == true){
        isChecked = check[i].id
        isChecked = num + 1
        console.log(isChecked)
      }
      else{
        isChecked = num + 0
      }
}
 setCheckedTasksCounter([isChecked])
}




  return (
    <div className="App">
      <Header />
        <div>
            <form className={styles.form} onSubmit={handleCreateNewTask} autoComplete="off">
                <input 
                name='task'
                type="text" 
                value={newTaskContent}
                placeholder='Adicione uma nova tarefa'
                onChange={handleTaskContentChange} 
                required

                />

                <button type='submit' disabled={isNewTaskContentEmpty} >
                     Criar 
                     <PlusCircle size={20}/>
                </button>
            </form>

            <div className={styles.task}>

                <header className={styles.taskInfo}>
                    <p className={styles.createdTasksLabel}>
                    Tarefas Criadas <span className={styles.createdTasksCounter}>{taskCount}</span>
                    </p>

                     <p className={styles.completedTasksLabel}>
                    Concluídas<span className={styles.completedTasksCounter}>{`${checkedTasksCounter} de ${taskCount}`}</span>
                    </p>
                </header>

                 <div className={styles.taskBox}>
                    <div className={styles.taskContent}>
                     
                      <div className={taskCount == 0 ? styles.taskNull : styles.taskNullHidden}>
                        <ClipboardText size={100} />
                        <strong>Você não tem tarefas!</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                      </div>

                      {tasks.map (task => {
                        return(
                          <Cards
                          content={task}
                          deleteTask={deleteTask}
                          isChecked={countChecked}
                          />
                        )})}
                    </div>
                 </div>
            </div>
        </div>
    </div>

    
  )
}
