
import {  } from '';
import { House } from "../house.model";
import * as HouseActions from './house.actions';
import * as fromApp from '../../store/app.reducers';


export interface FeatureState extends fromApp.AppState{
    houses: State
}



export interface State {
    houses: House[];
}

const initialState: State = {
    houses:  [
        new House(0, 'Weekend House', 
        'good holiday', 'https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg'
        ),
        new House(1, 'Apartment', 'Who the f wanna live here anyway', 'https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg', 
       )

    ]
};

export function houseReducer ( state = initialState, action: HouseActions.HouseActions ) {
    switch (action.type) {
        case (HouseActions.SET_HOUSES):
            return {
                ...state,
                houses: [...action.payload]
            };
        case ( HouseActions.ADD_HOUSE):
            return{
                ...state, 
                houses: [...state.houses, action.payload]
            }
        case (HouseActions.UPDATE_HOUSE):
            const house = state.houses[action.payload.index];
            const updatedHouse = {
                ...house,
                ...action.payload.updatedHouse
            };
            const houses = [...state.houses];
            houses[action.payload.index] = updatedHouse;
            return {
                ...state,
                houses: houses
            };
        case (HouseActions.DELETE_HOUSE):
            const oldHouses = [...state.houses];
            oldHouses.splice(action.payload, 1);
            return {
                ...state, 
                houses: oldHouses
            };
        default:
            return state;
    }
}