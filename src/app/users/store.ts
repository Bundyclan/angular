import { ITodo } from "src/app/users/todo";
import {routerReducer} from '@angular-redux/router';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODO } from './actions';
import { tassign } from 'tassign';

export interface IAppState { 
    todos: ITodo[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}


export function rootReducer(state, action) {
    switch(action.type) {
        case ADD_TODO:
            //action.todo.id = state.todos.length + 1;
            // tassign to stop an extra member/value pair from being added to the initial state
            return tassign(state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                ///////////////  -- REMOVED DATE , because it breaks the test due to not being able to receive the exact date
                 lastUpdate: new Date()
                // , newCar: [{name: 'mustang'}]
            })

        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    //expand the state array from beginning (0) to the new object's index
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index+1)
                ],
                lastUpdate: new Date()
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })

        case REMOVE_ALL_TODO:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date
            })
        
        default:
            return state;
    }
}