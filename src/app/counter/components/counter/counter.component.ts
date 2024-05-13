import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
    <h3>Counter es: {{counter}}</h3>
    <button (click)="increment(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment(+1)">+1</button>
  `
})
export class CounterComponent {
  public title:string = 'Mi primera app';
  public counter:number = 10;

  increment(value:number):void {
    this.counter=this.counter+value;
  }
  reset():void {
    this.counter=10;
  }
}
