import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import { UserdataService } from 'src/app/shared/userdata.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {

  blog_id : any;
  blog_obj : any;
  blog_collection : any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UserdataService,
    private boards: BoardService
  ) {}

  ngOnInit() {
    this.blog_collection = this.boards.collection;

    this.route.queryParams.subscribe((params) => {
      this.blog_id = params['id'];
  });

 this.blog_obj =  this.blog_collection.at(this.blog_id);
}

edit(){

  const test: any = {};
  test['id'] = this.blog_id;
  this.router.navigate(['edit'], {
    queryParams: test,
    queryParamsHandling: null,
  });


}

delet_blog(){

  this.boards.collection.splice(1, this.blog_id)
  this.router.navigate(['home']);

}

}