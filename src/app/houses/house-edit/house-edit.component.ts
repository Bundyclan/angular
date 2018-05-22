import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HouseService } from '../house.service';
import { House } from '../house.model';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  id: number;
  editMode = false;
  houseForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private houseService: HouseService,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      //console.log(this.editMode);
      }
    );
  }

  onSubmit() {
    // const newHouse = 
    // new House(this.houseForm.value['name'], 
    // this.houseForm.value['description'],
    // this.houseForm.value['imagePath']
    //(newHouse)

    // console.log(this.houseForm);
    if (this.editMode){
      
      this.houseService.updateHouse(this.id, this.houseForm.value)
    }else{
      this.houseService.addHouse(this.houseForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    
    let houseName = '';
    let houseImagePath = '';
    let houseDescription = '';

    if (this.editMode) {
      const house = this.houseService.getHouse(this.id);
      houseName = house.name;
      houseImagePath = house.imagePath;
      houseDescription = house.description;
    }

    this.houseForm = new FormGroup({
      'name': new FormControl(houseName, Validators.required),
      'imagePath': new FormControl(houseImagePath, Validators.required),
      'description': new FormControl(houseDescription, Validators.required)
    });
  }

  

}
