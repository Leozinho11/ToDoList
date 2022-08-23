import styles from './Cards.module.css';
import { Trash } from 'phosphor-react'

export function Cards () {
    return (
        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <input type="checkbox" id="task1" />
            <label htmlFor='task1'>bahsbshasbhlsla</label>
            <button>
              <Trash size={24} />
            </button>
          </div>
        </div>
    )
}