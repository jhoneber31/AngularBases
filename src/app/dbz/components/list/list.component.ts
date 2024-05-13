import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/chracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Vegeta',
    power: 10000
  }]
}
