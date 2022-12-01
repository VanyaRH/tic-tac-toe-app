import styles from './app.module.scss';
import {GameBoard} from "../gameBoard/gameBoard";
import {useParams} from "react-router-dom";

export const AppView = () => {
    const param = useParams();

    return (
        <div className={styles.app}>
            <GameBoard type={param.type || ''}/>
        </div>
    )
}