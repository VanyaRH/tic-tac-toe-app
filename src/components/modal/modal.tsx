import React, {useEffect, useState} from "react";
import styles from './modal.module.css';


interface IModal{
    onClick: () => void;
    text: string;
}

export const Modal = ({ onClick, text }:IModal) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setShow(true);
        }, 100);

        return () => { clearTimeout(timeout) }
    }, [])

    return (
        <>
            <div className={styles.darkBG}/>
            <div className={styles.centered}>
                <div className={`${styles.modal} ${show && styles.show}`}>
                    {/*<div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Dialog</h5>
                    </div>*/}
                    {/*<button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        x
                    </button>*/}
                    <div className={styles.modalContent}>
                        <span>{text}</span>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.restartBtn} onClick={onClick}>
                                Restart
                            </button>
                            {/*<button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};