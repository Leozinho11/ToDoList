import styles from './Header.module.css';
import todologo from '../../assets/ToDoLogo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={todologo} alt="ToDo Logo" />
        </header>
    )
}