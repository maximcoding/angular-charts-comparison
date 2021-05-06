import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  config: zingchart.graphset = {
    type: 'line',
    series: [{
      values: [3, 6, 4, 6, 4, 6, 4, 6]
    }],
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
