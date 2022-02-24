import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-articles',
  templateUrl: './footer-articles.component.html',
  styleUrls: ['./footer-articles.component.css']
})
export class FooterArticlesComponent implements OnInit {

  footers =[
    {name: 'hive-left', img: 'assets/img/Group 202.png'},
    {name: 'logo-bee', img: 'assets/img/Group.jpg'},
    {name: 'hive-right', img: 'assets/img/Group 201.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
