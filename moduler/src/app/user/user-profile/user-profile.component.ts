import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate blogger and tech enthusiast.'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
