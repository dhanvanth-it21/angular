import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  input: FormControl = new FormControl('');

  ngOnInit() {
    console.log(this.input.valueChanges)
    this.input.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(
        (value) => {
          console.log(value);
        }
      )
      
  }

  formInput = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
    }
  );

  onSubmit() {
    console.log(this.formInput.value, this.formInput.controls.name.valid, this.formInput.controls.email.valid)

  }


  // data: number = 0;

  // constructor() {
  //   this.clickSubject.subscribe(this.inc)
  // }

  // inc()  {
  //   this.data++;
  // }

  // onClick() {
  //   this.clickSubject.next();
  // }


  // private clickSubject = new Subject<void>();




}
