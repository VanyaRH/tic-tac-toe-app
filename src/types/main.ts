export enum FillTypes{
    Cross= 'cross',
    Circle='circle'
}

export enum WinnerTypes{
    player1 = 'player1',
    player2 = 'player2',
    draw = 'draw'
}

export type CellFill = '' | FillTypes.Cross | FillTypes.Circle;

export interface ICell{
    id: number;
    fill: CellFill;
    isWin: boolean;
}