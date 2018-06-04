import { Injectable } from "@angular/core";
import { HouseService } from "../houses/house.service";
import { House } from "../houses/house.model";
import { AuthService } from "../login/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";

@Injectable()

export class DataStorageService {
    constructor (private httpClient: HttpClient, private houseService: HouseService, private authService: AuthService) {}

    storeHouses() {
        //const token = this.authService.getToken();

        // return this.httpClient.put('https://ng-http-5a99a.firebaseio.com/houses.json' +
        // token , this.houseService.getHouses(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token),
        //     headers: new HttpHeaders()
        // } );
    const req = new HttpRequest ('PUT', 'https://ng-http-5a99a.firebaseio.com/houses.json', 
    this.houseService.getHouses(), {reportProgress: true});
    return this.httpClient.request(req);

    }

    getHouses() {
        
        //const token = this.authService.getToken();
        // auth=' + token
        
        // this.httpClient.get<House[]>('https://ng-http-5a99a.firebaseio.com/houses.json?auth=' + token)

        this.httpClient.get<House[]>('https://ng-http-5a99a.firebaseio.com/houses.json', {
            observe: 'body',
            responseType: 'json' //blob for files and arraybuff for buffing data
        } )
        .subscribe(
            (houses) => {
                //console.log(houses)
                this.houseService.setHouses(houses);

            }
            
        );
    }

    deleteHouses() {
        const token = this.authService.getToken();

        return this.httpClient.delete('https://ng-http-5a99a.firebaseio.com/houses.json?auth=' + token, {
            observe: 'body',
            headers: new HttpHeaders()
        } ). subscribe(
            (houses)=> {
                console.log(houses)
            }
        )
        
        ;
    }

}