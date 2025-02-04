import { Component } from '@angular/core';
import { BlogService } from '../../core/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs: { id: number; title: string; content: string; }[] = [];

  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
