import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            //concat make copys of an array, adds new item on it, and turns the new array without mutading the previous array.
            return state.concat(action.payload);

        default:
            return state;
    }
};