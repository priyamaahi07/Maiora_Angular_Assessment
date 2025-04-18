import { Component, EventEmitter, Output } from '@angular/core';
import { ComBComponent } from '../com-b/com-b.component';

@Component({
  selector: 'app-com-a',
  imports: [ComBComponent],
  templateUrl: './com-a.component.html',
  styleUrl: './com-a.component.scss'
})
export class ComAComponent {

  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(){

  }

  emitData(event: any){
    console.log(event);
  }
}
