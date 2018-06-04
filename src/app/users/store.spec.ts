var deepFreeze = require('deep-freeze');
//does not allow to mutate the value that is passed inside it
import * as types from './actions';
import { TestBed, inject } from '@angular/core/testing';
import { rootReducer } from './store';

describe('Todos reducer', () => {
    it('Return the initial state', ()=> {
        const stateBefore = {todos: [], lastUpdate: null};
        const stateAfter = {todos: [], lastUpdate: null};
        deepFreeze(stateBefore);

        expect ( rootReducer(stateBefore, {})).toEqual(stateAfter);
    });

    it('Add a todo to the store', ()=>{
        const stateBefore = {todos: [], lastUpdate: null};
        const action = {type: types.ADD_TODO, todo: {
       // id: '',
        description: "just test",
        responsible: "test",
        priority: "low",
        lastUpdate: null,
        isCompleted: false}}
        const stateAfter = {todos: [{
            //id: 1,
            description: "just test",
            responsible: "test",
            priority: "low",
            lastUpdate: null,
            isCompleted: false}], lastUpdate: null};
        deepFreeze(stateBefore);
        deepFreeze(action);
        
        expect ( rootReducer(stateBefore, action)).toEqual(stateAfter);
    })

});
