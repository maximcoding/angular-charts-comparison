import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {

  config = {
    type: 'mixed',
    legend: {
      item: {
        'background-color': '#ffe6e6',
        'font-color': 'red',
        'font-family': 'Georgia',
        'border-width': 1,
        'border-color': 'red',
        'border-radius': '5px'
      },
      layout: '5x1',
      x: '82%',
      y: '25%',
    },
    'scale-y': {
      progression: 'log',
      'log-base': 5,
      'thousands-separator': ', '
    },
    plot: {
      marker: { //Apply marker styling globally.
        'background-color': '#00FFFF',
        size: 7,
        'border-color': '#009999',
        'border-width': 2,
        'line-color': '#009999',
        'line-width': 2,
      },
      'legend-item': {
        'font-family': 'Georgia',
        'font-size': '12'
      },
      'legend-marker': {
        'show-line': true,
      }
    },
    series: [
      {
        values: [
          [1, 9],
          [2, 15],
          [3, 21],
        ],
        text: 'LEGEND TITLE',
        'legend-marker': {
          type: 'square',
          'background-color': '#eaf7fb',
          'border-color': '#29A2CC',
          'border-width': 2
        }
      },
      {
        values: [
          [0.9, 3],
          [2.1, 13],
          [3.5, 25],
        ]
      },
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
