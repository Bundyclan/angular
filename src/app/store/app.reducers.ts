import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../login/store/auth.reducers';

export interface AppState {
    auth: fromAuth.State
}

//                                     state type
export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer
};