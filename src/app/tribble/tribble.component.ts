import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tribble',
  templateUrl: './tribble.component.html',
  styleUrls: ['./tribble.component.css']
})
export class TribbleComponent implements OnInit {

tribble: String;

  constructor( private route: ActivatedRoute
    , private location: Location) { }

  ngOnInit() {
    this.getTribble();
  }

  getTribble(): void {
    this.tribble = this.route.snapshot.paramMap.get('tribble');
  }
}
