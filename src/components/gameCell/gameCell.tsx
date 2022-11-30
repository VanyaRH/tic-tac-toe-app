import styles from './cell.module.scss';
import {GameElement} from "../gameElement/gameElement";
import { CellFill } from '../../types/main';

interface IGameCell{
    id: number;
    onClick: (id: number) => void;
    fill: CellFill;
    isWin: boolean;
}

export const GameCell = ({ id, fill, isWin, onClick }:IGameCell) => {
    return(
        <div onClick={onClick.bind(null, id)} className={`${styles.cell} ${isWin && styles.win}`}>
            <GameElement fill={fill}/>
        </div>
    )
}