import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input()
  data: number = 0;
  @Output()
  dataChange: EventEmitter<number> = new EventEmitter<number>();

  lifeCycle: number = 0;



  inc() {
    this.data++;
    this.dataChange.emit(this.data)
  }

  // constructor(private routes: ActivatedRoute) {
  //   console.log(`child-${this.lifeCycle++}-constructor --> ${this.data}`);
  // }

  // ngOnInit() {
  //   console.log(`child-${this.lifeCycle++}-ngOnInit --> ${this.data}`);
  // }

  // ngOnChanges() {
  //   console.log(`child-${this.lifeCycle++}-ngOnChanges --> ${this.data}`);

  // }

  // ngDoCheck() {
  //   console.log(`child-${this.lifeCycle++}-ngDoCheck --> ${this.data} `); 
  // }

  // ngAfterContentInit() {
  //   console.log(`child-${this.lifeCycle++}-ngAfterContentInit --> ${this.data} `); 
  // }

  // ngAfterContentChecked() {
  //   console.log(`child-${this.lifeCycle++}-ngAfterContentChecked --> ${this.data} `); 
  // }

  // ngAfterViewInit() {
  //   console.log(`child-${this.lifeCycle++}-ngAfterViewInit --> ${this.data} `); 
  // }

  // ngAfterViewChecked() {
  //   console.log(`child-${this.lifeCycle++}-ngAfterViewChecked --> ${this.data} `); 
  // }

  // ngOnDestroy() {
  //   console.log(`child-${this.lifeCycle++}-ngOnDestroy --> ${this.data} `); 
  // }

}
