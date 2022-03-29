import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router : Router,
               private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  managePost(){

    this.router.navigate(['manage']);

  }

  navs = [
    {
      name : 'home',
      link : 'home',
      status : 'true',
    }
  ]

}
