import { Injectable } from "@angular/core";
import { House } from "./house.model";
import { Subject } from "rxjs/internal/Subject";

@Injectable()

export class HouseService {
    housesChanged = new Subject<House[]>();

    //houseSelected = new EventEmitter<House>();

    private houses: House[] = [
        new House(0, 'Weekend House', 
        'good holiday', 'https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg'
        ),
        new House(1, 'Apartment', 'Who the f wanna live here anyway', 'https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg', 
       )

    ];

    setHouses(houses: House[]) {
        this.houses = houses;
        this.housesChanged.next(this.houses.slice());
    }


    getHouses() {
        //only returns copy, not shows updating houses
        return this.houses.slice();
    }


    // getHouse(id: number) {
    //     return this.houses[id];
    // }

    // addHouse(house: House) {
    //     this.houses.push(house);
    //     this.housesChanged.next(this.houses.slice());
    // }

    // updateHouse(index: number, newHouse: House) {
    //     this.houses[index] = newHouse;
    //     this.housesChanged.next(this.houses.slice());
    // }

    // deleteHouse ( index: number) {
    //     this.houses.splice(index, 1);
    //     this.housesChanged.next(this.houses.slice());
    // }

    

    

}