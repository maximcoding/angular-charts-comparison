import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-charts',
  templateUrl: './zing.component.html',
  styleUrls: ['./zing.component.scss']
})
export class ZingComponent implements OnInit {

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
