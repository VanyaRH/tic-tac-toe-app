import styles from './app.module.scss';
import {GameBoard} from "../gameBoard/gameBoard";

export const AppView = () => {
    return (
        <div className={styles.app}>
            <GameBoard/>
        </div>
    )
}