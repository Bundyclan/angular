import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HouseService } from '../house.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import * as fromApp from '../../store/app.reducers';
import * as fromHouse from '../store/house.reducers';
import * as HouseActions from '../store/house.actions';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  houseState: Observable<fromHouse.State>
  house: House;
  id: number;

  constructor( 
    private houseService: HouseService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromHouse.FeatureState>) {

  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe( 
      (params: Params) => {
        this.id= +params['id'];
        this.houseState = this.store.select('houses');
        //this.house = this.houseService.getHouse(this.id);
      }
    );
  }

  onEditHouse(){
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteHouse(){
    this.store.dispatch(new HouseActions.DeleteHouse(this.id));
    this.store.dispatch(new HouseActions.StoreHouses());
    console.log(this.id);
   // this.houseService.deleteHouse(this.id);
    this.router.navigate(['/homes']);

  }

}
