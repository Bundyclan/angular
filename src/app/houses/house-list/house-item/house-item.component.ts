import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { House } from '../../house.model';
import { HouseService } from '../../house.service';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  @Input() house: House;
  @Input() index: number;
  // @Output() houseSelected = new EventEmitter<void>();

  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.houseSelected.emit();
    //this.houseService.houseSelected.emit(this.house);
  }

}
