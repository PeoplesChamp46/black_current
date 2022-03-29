import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../shared/userdata.service';
import { BoardService } from '../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgUrl: any;
  board_arr: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UserdataService,
    private boards: BoardService
  ) {}

  ngOnInit() {
    this.users.apiCall().subscribe((data) => {
      this.imgUrl = data;
      console.log(this.imgUrl.results);
    });

    this.board_arr = this.boards.collection;
  }

  openCard(ix: any) {
    const test: any = {};
    test['id'] = ix;
    this.router.navigate(['blog'], {
      queryParams: test,
      queryParamsHandling: null,
      relativeTo: this.route,
    });
  }
}
