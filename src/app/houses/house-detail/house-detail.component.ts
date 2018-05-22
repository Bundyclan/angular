import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../house.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;
  id: number;

  constructor( 
    private houseService: HouseService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe( 
      (params: Params) => {
        this.id= +params['id'];
        this.house = this.houseService.getHouse(this.id);
      }
    );
  }

  onEditHouse(){
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteHouse(){
    this.houseService.deleteHouse(this.id);
    this.router.navigate(['/homes']);
  }

}
