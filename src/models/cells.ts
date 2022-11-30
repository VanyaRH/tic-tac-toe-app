import {ICell, WinnerTypes} from "../types/main";

export interface IScore{
    player1: number;
    player2: number;
}

export interface IGameState {
    winner: WinnerTypes | null;
    move: number;
    cells: Array<ICell>,
    score: IScore
}

export const Cells:Array<ICell> = [
    {
        id: 0,
        fill: '',
        isWin: false
    },
    {
        id: 1,
        fill: '',
        isWin: false
    },
    {
        id: 2,
        fill: '',
        isWin: false
    },
    {
        id: 3,
        fill: '',
        isWin: false
    },
    {
        id: 4,
        fill: '',
        isWin: false
    },
    {
        id: 5,
        fill: '',
        isWin: false
    },
    {
        id: 6,
        fill: '',
        isWin: false
    },
    {
        id: 7,
        fill: '',
        isWin: false
    },
    {
        id: 8,
        fill: '',
        isWin: false
    },
]

export const GameState:IGameState = {
    winner: null,
    move: 1,
    cells: Cells,
    score: {
        player1: 0,
        player2: 0
    }
}

