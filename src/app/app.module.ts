import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './page/blog/blog.component';
import { BlogEditComponent } from './page/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    BlogComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
