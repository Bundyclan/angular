import { FilterPipe } from './filter.pipe';
import { TestBed } from '@angular/core/testing';
import { HouseListComponent } from './house-list.component';
import { House } from '../house.model';

describe('FilterPipe', () => {
  beforeEach( () => { 
      TestBed.configureTestingModule({
      declarations: [HouseListComponent]
      
    });       

    

  }
)
  
  
  
  it('create an instance', () => {
    
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
    });

  it('No search string returns input', ()=>{
    const houses: House[] = [
      new House(0, 'Weekend House', 
      'good holiday', 'https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg'
      ),
      new House(1, 'Apartment', 'Who the f wanna live here anyway', 'https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg', 
     )

  ];
    let pipe = new FilterPipe();
    let result  = pipe.transform(houses, '');
    console.log(result);
    expect(result.length).toBe(2);
  })

  it('Should return weekend house', ()=>{
    const houses: House[] = [
      new House(0, 'Weekend House', 
      'good holiday', 'https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg'
      ),
      new House(1, 'Apartment', 'Who the f wanna live here anyway', 'https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg', 
     )

  ];
    let pipe = new FilterPipe();
    let result  = pipe.transform(houses, 'we');
    console.log(result);
    expect(result.length).toBe(1);
  })
    
  });




// House Model for reference
//   public id: number;
//   public name: string;
//   public description: string;
//   public imagePath: string;

// id: number, name: string, desc: string, imagePath: string
