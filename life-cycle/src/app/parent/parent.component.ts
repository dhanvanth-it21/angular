import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
import { FormsModule } from '@angular/forms'
import { RxjsService } from '../rxjs.service';
import { Observable } from 'rxjs';
import { of, from } from 'rxjs';



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  data: number = 1000;
  lifeCycle: number = 100;
  check: boolean = true;



  inc() {
    this.data++;

  }

  // constructor(private rxjsService: RxjsService) {
  //   // console.log(`----------------------------------parent-${this.lifeCycle++}-constructor --> ${this.data}`);

  // }

  // ngOnInit() {
  //   console.log(`-------------------------------parent-${this.lifeCycle++}-ngOnInit --> ${this.data}`);
  //   this.rxjsService.mySubjectOvervable.subscribe((data: string) => {
  //    console.log(data);
  //   });
  //   const invt = setInterval(() => {
  //     this.rxjsService.updateText(`${Math.floor(Math.random() * 1000)}`);
  //   },1000)

  //   setTimeout(() => clearInterval(invt),5000)
  // }



  // ngOnChanges() {
  //   console.log(`---------------------------------parent-${this.lifeCycle++}-ngOnChanges --> ${this.data}`);
  // }

  // ngDoCheck() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngDoCheck --> ${this.data}`); 
  // }

  // ngAfterContentInit() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngAfterContentInit --> ${this.data}`); 
  // }

  // ngAfterContentChecked() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngAfterContentChecked --> ${this.data}`);
  // }

  // ngAfterViewInit() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngAfterViewInit --> ${this.data}`);
  // }

  // ngAfterViewChecked() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngAfterViewChecked --> ${this.data}`);
  // }

  // ngOnDestroy() {
  //   console.log(`-----------------------------------parent-${this.lifeCycle++}-ngOnDestroy --> ${this.data}`);
  // }




  number$ = of(1,2,3,4);
  arrNumbers$ = from([100,200,300]);
  constructor() {
    console.log(this.number$);
    console.log(this.arrNumbers$);
    this.number$.subscribe((data) => {
      console.log(data);
    })
    this.arrNumbers$.subscribe((data) => {
      console.log(data);
    })
    this.arrNumbers$.subscribe((data) => {
      console.log(data*2);
    })
  }





}
