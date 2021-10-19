import {createStore} from 'redux'
import {reducerFun} from './reducer.js'


const initState = {
    counter:0,
}

export const store=createStore(reducerFun,initState)