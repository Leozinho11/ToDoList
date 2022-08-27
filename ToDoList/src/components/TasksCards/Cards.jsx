import styles from './Cards.module.css';
import { v4 as uuidv4 } from 'uuid'
import { Trash } from 'phosphor-react';


export function Cards ({content, deleteTask, key = uuidv4()}) {

  function handleDeleteTask(){

    deleteTask(content)
  }
  
  function isChecked(isChecked){
    const check = document.getElementsByName('check');
  for (let i=0; i<check.length;i++){
    if (check[i].checked == true) {
      isChecked = check.length
  } else {
     console.log(isChecked = false)
  }
  }
  }
  

  

    return (
        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <input type="checkbox" id={key} name='check' onClick={isChecked}/>
            <label htmlFor={key}>{content}</label>
            <button onClick={handleDeleteTask} title='Deletar task'>
              <Trash size={24} />
            </button>
          </div>
        </div>
    )
}