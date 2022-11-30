import styles from './element.module.scss';
import imgX from '../../images/x.png';
import imgO from '../../images/o.png';
import { CellFill, FillTypes } from '../../types/main';

interface IGameElement{
    fill: CellFill;
}

export const GameElement = ({ fill }:IGameElement) => {
    const getFromFill = (fill: CellFill) => {
        switch(fill){
            case FillTypes.Cross:
                return <img src={imgX} className={styles.image} alt=""/>;
            case FillTypes.Circle:
                return <img src={imgO} className={styles.image} alt=""/>;
            default:
                return null;
        }
    }
    return (
        <div className={styles.element}>
            { getFromFill(fill) }
        </div>
    )
}