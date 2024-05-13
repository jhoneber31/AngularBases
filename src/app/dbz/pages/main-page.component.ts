import { Component } from '@angular/core';
import { Character } from '../interfaces/chracter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] =[{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 15000
  }
  ];

}
