import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class BlogService {


  private blogs: { id: number, name: string, email: string }[]
   = [
    { id: 1, name: 'Ram', email: 'ram@gmial.com' },
    { id: 2, name: 'Kumar', email: 'kumar@gmail.com' },
    { id: 3, name: 'Sundar', email: 'sundar@gmail.com' },
  ];

  constructor() { }

  getBlogs(): { id: number, name: string, email: string }[] {
    return this.blogs;
  }

  getBlogById(id: number): { id: number, name: string, email: string } | undefined {
    return this.blogs.find(blog => blog.id === id);
  }
}
