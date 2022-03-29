import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogEditComponent } from './page/blog-edit/blog-edit.component';
import { BlogComponent } from './page/blog/blog.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'home', redirectTo : ''},
  { path : 'manage', component : PostComponent},
  { path : 'blog', component : BlogComponent},
  { path : 'edit', component : BlogEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
