import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {
    @Input()
    childData:number = 0;
    @Output()
    childDataChange: EventEmitter<number> = new EventEmitter<number>();

    countFun(): void {
      this.childData++;
      this.childDataChange.emit(this.childData);
    }
    

}
