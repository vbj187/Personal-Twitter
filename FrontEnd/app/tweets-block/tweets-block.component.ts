import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-tweets-block',
  templateUrl: './tweets-block.component.html',
  styleUrls: ['./tweets-block.component.css']
})

export class TweetsBlockComponent implements OnInit {

  listcomments: Object;

  constructor(private _http: HttpClient) {
    console.log("Hello");
  }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/gettweets').subscribe((data) => {
      console.log(data);
      this.listcomments = data;
    });
  }

}
