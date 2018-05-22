import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../house.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  @Output() houseWasSelected = new EventEmitter<House>();

  // data stored in service
  houses: House[];
  subscription: Subscription;
  
  constructor( private houseService: HouseService, 
  private router: Router,
  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.houseService.housesChanged.subscribe((houses: House[]) => {
      this.houses = houses;
    }
  );
    this.houses = this.houseService.getHouses();
  }

  

  onNewHouse() {
    this.router.navigate( ['new'], {relativeTo:this.route});
  }

  ngOnDestroy ( ) {
    //this.subscription.unsubscribe();
  }

}
