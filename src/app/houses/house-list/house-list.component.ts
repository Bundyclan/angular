import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { House } from '../house.model';
import { HouseService } from '../house.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromHouse from '../store/house.reducers';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  @Output() houseWasSelected = new EventEmitter<House>();

  // data stored in service
  // houses: House[];
  housesState: Observable<fromHouse.State>;
  subscription: Subscription;
  
  constructor( 
     // private houseService: HouseService, 
      private router: Router,
      private route: ActivatedRoute,
      private store: Store<fromHouse.FeatureState> ) { }

  ngOnInit() {
    this.housesState = this.store.select('houses');
  //   this.houseService.housesChanged.subscribe((houses: House[]) => {
  //     this.houses = houses;
  //   }
  // );
  //   this.houses = this.houseService.getHouses();
  }


  onNewHouse() {
    this.router.navigate( ['new'], {relativeTo:this.route});
  }

  filteredName = '';

  ngOnDestroy ( ) {
    //this.subscription.unsubscribe();
  }

}
