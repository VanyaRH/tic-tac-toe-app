import styles from './start.module.scss';
import {Link} from "react-router-dom";

export const AppStart = () => {
    return (
        <div className={styles.start}>
            <div className={styles.main}>
                <div className={styles.title}>
                    TIC <span>TAC</span> TOE
                </div>
                <div className={styles.buttons}>
                    <Link className={`${styles.btn1} ${styles.button}`} to={'/app/pc'}>Play with PC</Link>
                    <Link className={`${styles.btn2} ${styles.button}`} to={'/app/fr'}>Play with friend</Link>
                </div>
            </div>
        </div>
    )
}