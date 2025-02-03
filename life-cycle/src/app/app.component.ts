import { Component } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ChildComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-cycle';
}
