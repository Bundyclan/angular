import { Action } from '@ngrx/store';
import { House } from '../house.model';

//                        unique identifiers for the actions
export const SET_HOUSES = 'SET_HOUSES';
export const ADD_HOUSE = 'ADD_HOUSE';
export const UPDATE_HOUSE = 'UPDATE_HOUSE';
export const DELETE_HOUSE = 'DELETE_HOUSE';
export const STORE_HOUSES = 'STORE_HOUSES';
export const FETCH_HOUSES = 'FETCH_HOUSES';




export class SetHouses implements Action {
  // requires to register a type property
    readonly type = SET_HOUSES;

    constructor (public payload: House[]) {}
}

export class AddHouse implements Action {
    readonly type = ADD_HOUSE;

    constructor (public payload: House) {}
}

export class UpdateHouse implements Action {
    readonly type = UPDATE_HOUSE;

        //  constructor to set payload easily, payload is converted into a json property
    constructor (public payload: {index: number, updatedHouse: House}) {}
}


export class DeleteHouse implements Action {
    readonly type = DELETE_HOUSE;

    constructor (public payload: number ) {}
}

export class StoreHouses implements Action {
    readonly type = STORE_HOUSES;
}

export class FetchHouses implements Action {
    readonly type = FETCH_HOUSES;
}



export type HouseActions = SetHouses | AddHouse | UpdateHouse | DeleteHouse | StoreHouses | FetchHouses ;
