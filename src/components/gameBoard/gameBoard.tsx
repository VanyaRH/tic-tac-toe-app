import styles from './game.module.scss';
import {GameCell} from "../gameCell/gameCell";
import React, {useState} from "react";
import {Cells, GameState, IGameState} from "../../models/cells";
import {CellFill, FillTypes, ICell, WinnerTypes} from "../../types/main";
import {checkWinner, getWinnerName} from "../../winner";
import { Modal } from '../modal/modal';

export const GameBoard = () => {
    const [gameModel, setModel] = useState(GameState);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const clearBoard = (clearScore:boolean = false) => {
        let newCells= gameModel.cells.map(cell => { cell.fill = ''; cell.isWin = false; return cell; });

        setModel((prevState:IGameState) => {
            return {
                ...prevState,
                cells: newCells,
                move: 1,
                winner: null,
                ...(clearScore && { score: { player1: 0, player2: 0 } })
            }
        });
    }

    const getCell = (id: number) => {
        const cellIndex = gameModel.cells.findIndex(x => x.id === id);

        return gameModel.cells[cellIndex] || null;
    }

    const checkEnd = () => {
        if(gameModel.move >= 3){
            let { winner, winCombination } = checkWinner(gameModel.cells);

            if(winner){
                let newCells = gameModel.cells.map(cell => {
                    return cell;
                });

                winCombination.forEach(el => { newCells[el].isWin = true });

                setModel((prevState:IGameState) => {
                    return {
                        ...prevState,
                        winner: winner,
                        score: {
                            ...prevState.score,
                            player1: winner === WinnerTypes.player1 ? ++prevState.score.player1 : prevState.score.player1,
                            player2: winner === WinnerTypes.player2 ? ++prevState.score.player2 : prevState.score.player2,
                        }
                    }
                });
                setIsOpenModal(true);
            }
        }
    }

    const setElement = (id: number) => {
        let newCells: ICell[] = [];
        switch(gameModel.move%2){
            case 1:
                newCells = gameModel.cells.map(cell => {
                    if(cell.id === id){
                        cell.fill = FillTypes.Cross;
                    }

                    return cell;
                })

                setModel((prevState:IGameState) => {
                    return {
                        ...prevState,
                        cells: newCells,
                        move: ++prevState.move
                    }
                });
                break;
            case 0:
                newCells = gameModel.cells.map(cell => {
                    if(cell.id === id){
                        cell.fill = FillTypes.Circle;
                    }

                    return cell;
                })
                setModel((prevState:IGameState) => {
                    return {
                        ...prevState,
                        cells: newCells,
                        move: ++prevState.move
                    }
                });
                break;
        }

        checkEnd()
    }

    const onHandler = (id: number) => {
        const element = getCell(id);

        if(element.fill === ''){
            setElement(id);
        }
    }

    const onRestart = () => {
        setIsOpenModal(false);

        clearBoard();
    }

    return(
        <><div className={styles.main}>
            <div className={styles.title}>
                TIC <span>TAC</span> TOE
            </div>
            <div className={styles.move}>
                Player turn&nbsp;<span>{gameModel.move%2 ? 'X' : 'O'}</span>
            </div>
            <div className={`${styles.gameBoard} ${gameModel.winner && styles.isEnd}`}>
                {gameModel.cells.map((cell, index) => {
                    return <GameCell id={cell.id} key={index} fill={cell.fill} isWin={cell.isWin} onClick={onHandler}/>
                })}
            </div>
            <div className={styles.winnersScore}>
                <div className={styles.winner}>Score&nbsp;<span className={styles.pl}>X</span>:&nbsp;<span>{gameModel.score.player1}</span></div>
                <div className={styles.resetBox}><button onClick={() => { clearBoard(true) }} className={styles.resetBtn}>Reset</button></div>
                <div className={styles.winner}>Score&nbsp;<span className={styles.pl}>O</span>:&nbsp;<span>{gameModel.score.player2}</span></div>
            </div>
        </div>
            {isOpenModal && <Modal text={getWinnerName(gameModel.winner)} onClick={onRestart} />}
        </>
    )
}