import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  config = {
    type: 'range', // or "vrange"
    series: [
      {
        values:
          [
            [15, 30],
            [20, 40],
            [16, 35],
            [21, 30],
            [25, 45],
            [18, 27],
            [23, 35],
            [29, 39],
            [27, 30],
            [19, 34]
          ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
