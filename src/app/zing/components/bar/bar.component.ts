import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  config = {
    type: 'bar',
    series: [{
      values: [3, 6, 4, 6, 4, 6, 4, 6]
    }],
  };

  horizontal: zingchart.graphset = {
    type: 'hbar',
    series: [{
      values: [3, 6, 4, 6, 4, 6, 4, 6]
    }],
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
