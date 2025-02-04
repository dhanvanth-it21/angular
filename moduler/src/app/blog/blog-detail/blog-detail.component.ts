import { Component } from '@angular/core';
import { BlogService } from '../../core/blog.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blog!: { id: number; name: string; email: string; };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.params["id"];
    this.blog = this.blogService.getBlogById(parseInt(blogId))!;
  }
}
