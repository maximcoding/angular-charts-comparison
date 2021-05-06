import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss']
})
export class SparklineComponent implements OnInit {

  // full ZingChart schema can be found here:
  // https://www.zingchart.com/docs/api/json-configuration/
  lineConfig = {
    theme: 'spark',
    type: 'line',
    globals: {
      fontSize: '14px'
    },
    scaleX: {
      // set scale label
      label: {
        text: 'Days'
      },
      // convert text on scale indices
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    scaleY: {
      // scale label with unicode character
      label: {
        text: 'Temperature (°F)'
      }
    },
    crosshairX: {
      plotLabel: {
        padding: '10px 15px',
        borderRadius: '3px'
      }
    },
    series: [{
      text: 'Week 1',
      // plot values
      values: [23, 20, 27, 29, 25, 17, 15],
    },
      {
        text: 'Week 2',
        // plot values
        values: [35, 42, null, 49, 35, 47, 35],
      }
    ]
  };

  barConfig = {
    ...this.lineConfig,
    type: 'bar',
  };


  constructor() {
  }

  ngOnInit(): void {
  }

}
