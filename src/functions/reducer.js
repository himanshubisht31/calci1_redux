import { ADD_COUNT, SUB_COUNT } from "./actionTypes";



//takes a current state and action object as parameters
export const reducerFun = (state, { type, payload }) => {



    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + payload
            };

        case SUB_COUNT:
            return {
                ...state,
                counter: state.counter - payload
            }



        default:
            return { ...state }
    }

}