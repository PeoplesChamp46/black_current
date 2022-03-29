import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserdataService } from '../../shared/userdata.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  imgUrl: any;
  img_array: any;
  selected_url = '';
  blog_jason_data: any;
  selected = false;
  files: any;
  file_url: any;
  imagePath: any;

  collection_data: any;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UserdataService,
    private user_d: BoardService
  ) {}

  ngOnInit() {
    this.collection_data = this.user_d.collection;
  }

  typed(evt: any) {
    let value = evt.target.value;
    this.users.sendTerm(value);

    this.users.apiCall().subscribe((data) => {
      this.imgUrl = data;
      this.img_array = [...this.imgUrl.results];
      console.log(this.img_array);
    });

    this.selected = true;
  }

  selectedImg(ix: any) {
    const obj = this.img_array.at(ix);

    this.selected_url = obj.urls.regular;

    console.log(this.selected_url);

    this.selected = false;
  }

  onSubmit(form: NgForm) {
    const art = form.value.art_name;
    const artist = form.value.artist_name;
    const desc = form.value.description;
    const blog_p = form.value.blog_post;

    let post_obj = {
      name: art,
      artist: artist,
      desc: desc,
      image_url: this.selected_url,
      blog_post: blog_p,
    };

    this.user_d.collection.push(post_obj);

    form.reset();

    const test: any = {};
    test['id'] = this.user_d.collection.length;
    this.router.navigate(['blog'], {
      queryParams: test,
      queryParamsHandling: null,
    });

    console.log(this.user_d.collection.length);
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.imagePath = files;
    /*  reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.file_url = reader.result;
    }; */

    console.log(this.imagePath);
  }

  clear(form: NgForm) {
    form.reset();
  }

}
