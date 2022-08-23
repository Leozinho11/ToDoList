import styles from './Cards.module.css';
import { Trash } from 'phosphor-react';


export function Cards (content, onDeleteTask, id) {

  function handleDeleteTask (){
    onDeleteTask(content);
  }
  

    return (
        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{content}</label>
            <button onClick={handleDeleteTask}>
              <Trash size={24} />
            </button>
          </div>
        </div>
    )
}