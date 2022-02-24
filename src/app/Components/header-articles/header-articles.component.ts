import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-articles',
  templateUrl: './header-articles.component.html',
  styleUrls: ['./header-articles.component.css']
})
export class HeaderArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titles = [
    {
      name: '前書き'
    },
    {
      name: '企業理念'
    },
    {
      name: '会社概要'
    },
    {
      name: '営業形態'
    },
    {
      name: 'レビュー'
    },
    {
      name: '店舗情報'
    },
    {
      name: 'ニュース'
    },
    {
      name: 'お問い合わせ'
    },

  ]

}
