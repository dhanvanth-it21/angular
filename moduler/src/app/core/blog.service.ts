import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private blogs = [
    { id: 1, title: 'First Blog', content: 'This is the content of the first blog.' },
    { id: 2, title: 'Second Blog', content: 'This is the content of the second blog.' },
    { id: 3, title: 'Third Blog', content: 'This is the content of the third blog.' },
  ];

  constructor() { }

  getBlogs() {
    return this.blogs;
  }

  getBlogById(id: number) {
    return this.blogs.find(blog => blog.id === id);
  }
}
