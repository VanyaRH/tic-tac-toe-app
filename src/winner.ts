import { combinations } from "./models/combinations";
import {FillTypes, ICell, WinnerTypes} from "./types/main";

export const checkWinner = (gameModel:Array<ICell>) => {
    let winner = null, winCombination = [];

    for (const combination of combinations){
        if(gameModel[combination[0]].fill === FillTypes.Cross && gameModel[combination[1]].fill === FillTypes.Cross && gameModel[combination[2]].fill === FillTypes.Cross){
            winCombination.push(combination[0], combination[1], combination[2]);
            winner = WinnerTypes.player1;
            break;
        }

        if(gameModel[combination[0]].fill === FillTypes.Circle && gameModel[combination[1]].fill === FillTypes.Circle && gameModel[combination[2]].fill === FillTypes.Circle){
            winCombination.push(combination[0], combination[1], combination[2]);
            winner = WinnerTypes.player2;
            break;
        }
    }

    if(!winner && !gameModel.some(x => x.fill === '')){
        winner = WinnerTypes.draw;
    }

    return {
        winner,
        winCombination
    };
}

export const getWinnerName = (winner: WinnerTypes | null) => {
    switch(winner){
        case WinnerTypes.player1:
            return 'Winner X';
        case WinnerTypes.player2:
            return 'Winner O';
        case WinnerTypes.draw:
            return 'Draw';
        default:
            return '';
    }
}