import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-graph-axes',
  templateUrl: './graph-axes.component.html',
  styleUrls: ['./graph-axes.component.scss']
})
export class GraphAxesComponent implements OnInit {

  config = {
    type: 'area',
    // utc: true, /* Force UTC time. */
    // plotarea: {
    //   'adjust-layout': true /* For automatic margin adjustment. */
    // },
    'scale-x': {
      // label: { /* Add a scale title with a label object. */
      //   text: 'label text',
      // },
      // 'min-value': 1420070400000, /* Unix timestamp for Jan 1, 2015. */
      // step: 'day',
      // transform: { /* Converts your Unix timestamp to a human readable format. */
      //   type: 'date', /* Set your transform type to "date". */
      //   all: '%m.%d.%y' /* Specify your date/time format, using tokens. */
      // }
    },
    'scale-y': {
      // 'min-value': 0,
      //'max-value': 100
    },
    plot: {
      stacked: true,
      // 'stack-type': '100%'
    },
    series: [
      {
        values: [20, 40, 25, 50, 15, 45, 33, 34],
        stack: 1,
        'line-color': '#6666FF', /* hexadecimal or RGB value */
        'line-style': 'dashed', /* "solid" | "dotted" */
        'line-width': 5 /* in pixels */
      },
      {
        values: [5, 30, 21, 18, 59, 50, 28, 33],
        stack: 1
      },
      {
        values: [30, 5, 18, 21, 33, 41, 29, 15],
        stack: 2
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
