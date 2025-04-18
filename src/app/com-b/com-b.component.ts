import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-com-b',
  imports: [],
  templateUrl: './com-b.component.html',
  styleUrl: './com-b.component.scss'
})
export class ComBComponent {
  @Input() inputEx: string = '';
  @Output() outputEx: EventEmitter<any> = new EventEmitter();


  btnClick(){
    this.outputEx.emit('data emitted');
  }
}
