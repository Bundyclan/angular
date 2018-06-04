import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as HouseActions from '../store/house.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import { HttpClient, HttpRequest } from "@angular/common/http";
import { House } from "src/app/houses/house.model";
import { Store } from "@ngrx/store";
import * as fromHouse from '../store/house.reducers';

@Injectable()

export class HouseEffects {

    @Effect()
    houseFetch = this.actions$
        .ofType(HouseActions.FETCH_HOUSES)
        .switchMap((action: HouseActions.FetchHouses) => {
            return this.httpClient.get<House[]>('https://ng-http-5a99a.firebaseio.com/houses.json', {
            observe: 'body',
            responseType: 'json'
            }).map(
                (houses ) => {
                    console.log(houses);
                    return {
                        type: HouseActions.SET_HOUSES,
                        payload: houses
                    };
                }
            )
        });

        @Effect({dispatch: false})
        houseStore = this.actions$
            .ofType(HouseActions.STORE_HOUSES)
            .withLatestFrom(this.store.select('houses'))
            .switchMap(([action, state]) => {
                const req = new HttpRequest ('PUT', 'https://ng-http-5a99a.firebaseio.com/houses.json', 
                state.houses, {reportProgress: true});
                return this.httpClient.request(req);
            });


    constructor ( private actions$: Actions,
                  private httpClient: HttpClient,
                  private store: Store<fromHouse.FeatureState>,
                  ) {

    }
}