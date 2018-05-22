import { Injectable } from "@angular/core";
import { HouseService } from "../houses/house.service";
import { House } from "../houses/house.model";
import { AuthService } from "../login/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class DataStorageService {
    constructor (private httpClient: HttpClient, private houseService: HouseService, private authService: AuthService) {}

    storeHouses() {
        const token = this.authService.getToken();

        return this.httpClient.put('https://ng-http-5a99a.firebaseio.com/houses.json?auth=' + token , this.houseService.getHouses(), {
            observe: 'body',
            headers: new HttpHeaders()
        } );
    }

    getHouses() {
        
        const token = this.authService.getToken();
        
        // this.httpClient.get<House[]>('https://ng-http-5a99a.firebaseio.com/houses.json?auth=' + token)
        this.httpClient.get<House[]>('https://ng-http-5a99a.firebaseio.com/houses.json?auth=' + token, {
            observe: 'body',
            responseType: 'json' //blob for files and arraybuff for buffing data
        } )
        .subscribe(
            (houses) => {
                console.log(houses)

                // const houses: House[] = response.json();
                this.houseService.setHouses(houses);
                //return houses;
            }
            
        );
    }

}