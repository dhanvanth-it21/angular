import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: "", 
    component: BlogListComponent,
  },
  {
    path: ":id", 
    component: BlogDetailComponent,
  },
];

@NgModule({
  declarations: [BlogDetailComponent, BlogListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  exports: [RouterModule],
})
export class BlogModule { }
