import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildAComponent } from "../child-a/child-a.component";


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, ChildAComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{

  parentData: number = 0;
  countFun(): void {
    this.parentData++;
  }

  lifeCycle: number = 0;

  constructor() {
    console.log(`${this.lifeCycle++}-constructor`);
  }

  ngOnInit() {
    console.log(`${this.lifeCycle++}-ngOnInit`);
  }

}
