import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  config = {
    type: 'ring',
    // title: {
    //   text: 'title'
    // },
    legend: {
      item: {
        'background-color': '#ffffff',
        'font-color': 'red',
        'font-family': 'Georgia',
        'border-width': 1,
        'color': 'white',
        'border-color': 'yellow',
        'border-radius': '1px'
      },
      layout: '5x1',
      x: '25%',
      y: '25%',
    },
    plot: {
      borderColor: '#2B313B',
      borderWidth: 1,
      // slice: 200,
      tooltip: {
        fontSize: '30',
        fontFamily: 'Open Sans',
        padding: '1 5',
        text: '%npv locusview'
      },
      animation: {
        effect: 2,
        method: 1,
        speed: 10000,
        sequence: 1,
        delay: 1000
      }
    },
    series: [{
      values: [11.38],
      text: 'Internet Explorer',
      backgroundColor: '#68a0c7',
    },
      {
        values: [56.94],
        text: 'Chrome',
        backgroundColor: '#e3513a',
        detached: false
      },
      {
        values: [14.52],
        text: 'Firefox',
        backgroundColor: '#FFCB45',
        detached: false
      },
      {
        text: 'Safari',
        values: [9.69],
        backgroundColor: '#6877e5'
      },
      {
        text: 'Other',
        values: [7.48],
        backgroundColor: '#69ec8a',
        detached: true
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
