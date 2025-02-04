import { Component } from '@angular/core';
import { BlogService } from '../../core/blog.service';


@Component({
  selector: 'app-blog-list',
  standalone: false,
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs!: { id: number; name: string; email: string; }[];

  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
