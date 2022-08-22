import styles from './Task.module.css';
import { v4 as uuidv4 } from 'uuid'
import { Cards } from '../TasksCards/Cards';

export function Task() {

    const tasks = [
        {
            id: uuidv4(),
            task: 'Estudar',
            isChecked: true
        }
    ]

    return(
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
                    <Cards />
                </div>

            </div>
        </div>
    )
}