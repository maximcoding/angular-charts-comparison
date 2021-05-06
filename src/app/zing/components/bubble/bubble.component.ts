import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  config: zingchart.graphset = {
    type: 'bubble',
    series: [
      {
        values: [
          [1, 9, 59],
          [2, 15, 15],
          [3, 21, 30],
          [4, 30, 5],
          [5, 40, 35],
          [6, 59, 21],
          [7, 60, 25],
          [8, 75, 85],
          [9, 81, 87],
          [10, 99, 12]
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
