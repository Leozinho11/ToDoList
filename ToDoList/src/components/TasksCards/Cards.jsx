import styles from './Cards.module.css';
import { v4 as uuidv4 } from 'uuid'
import { Trash } from 'phosphor-react';


export function Cards ({content, deleteTask, key = uuidv4(), isChecked}) {

  function handleDeleteTask(){

    deleteTask(content)
  }

  function handleIsChecked(){
    countChecked(isChecked)
  }
  

  

  

    return (
        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <input type="checkbox"readOnly id={key} name='check' onClick={isChecked}/>
            <label htmlFor={key}>{content}</label>
            <button onClick={handleDeleteTask} title='Deletar task'>
              <Trash size={24} />
            </button>
          </div>
        </div>
    )
}