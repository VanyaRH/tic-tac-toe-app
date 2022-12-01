import {IGameState} from "./models/cells";
import {FillTypes, ICell, WinnerTypes} from "./types/main";
import {combinations} from "./models/combinations";

export const AutoBot = async (Array:Array<ICell>) => {
    return await getIdFromCombination(Array);
}

const getId = async (Array:Array<ICell>) => {
    const type = Math.floor(Math.random()*2);
    let id = null;

    switch(type){
        case 0:
            id = await getIdFromCombination(Array);
            break;
        case 1:
            id = await getRandomId(Array);
            break;
        default:
            id = null;
    }

    return id;
}

const getIdFromCombination = async (Array:Array<ICell>) => {
    let id = null;

    for (const combination of combinations){
        if(Array[combination[0]].fill === FillTypes.Circle && Array[combination[1]].fill === FillTypes.Circle && Array[combination[2]].fill === ''){
            id = Array[combination[2]].id;
            break;
        }

        if(Array[combination[1]].fill === FillTypes.Circle && Array[combination[2]].fill === FillTypes.Circle && Array[combination[0]].fill === ''){
            id = Array[combination[0]].id;
            break;
        }

        if(Array[combination[0]].fill === FillTypes.Circle && Array[combination[2]].fill === FillTypes.Circle && Array[combination[1]].fill === ''){
            id = Array[combination[1]].id;
            break;
        }


        if(Array[combination[0]].fill === FillTypes.Cross && Array[combination[1]].fill === FillTypes.Cross && Array[combination[2]].fill === ''){
            id = Array[combination[2]].id;
            break;
        }

        if(Array[combination[1]].fill === FillTypes.Cross && Array[combination[2]].fill === FillTypes.Cross && Array[combination[0]].fill === ''){
            id = Array[combination[0]].id;
            break;
        }

        if(Array[combination[0]].fill === FillTypes.Cross && Array[combination[2]].fill === FillTypes.Cross && Array[combination[1]].fill === ''){
            id = Array[combination[1]].id;
            break;
        }
    }

    return id || await getRandomId(Array);
}

const getRandomId = async (Array:Array<ICell>) => {
    let id = null, length = 1;

    while (length <= Array.length){
        const rand = Math.floor(Math.random()*Array.length);
        length++;

        if(Array[rand].fill === ''){
            id = Array[rand].id;
            break;
        }
    }

    return id;
}