import styles from './Cards.module.css';
import { v4 as uuidv4 } from 'uuid'
import { Trash } from 'phosphor-react';


export function Cards ({content, deleteTask, key = uuidv4(), isChecked}) {

  function handleDeleteTask(){

    deleteTask(content)
  }

  function changeCheck(){
    console.log(isChecked)
    }
  

    return (
        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <input type="checkbox" onClick={changeCheck} value={isChecked} id={key} />
            <label htmlFor={key}>{content}</label>
            <button onClick={handleDeleteTask} title='Deletar task'>
              <Trash size={24} />
            </button>
          </div>
        </div>
    )
}