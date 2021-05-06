import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-combined-graph-bar-area',
  templateUrl: './combined-graph-bar-area.component.html',
  styleUrls: ['./combined-graph-bar-area.component.scss']
})
export class CombinedGraphBarAreaComponent {


  config = {
    type: 'mixed',
    // title: {
    //   text: 'Sample Burndown Chart',
    //   align: 'left',
    //   marginLeft: '40%'
    // },
    legend: {
      adjustLayout: true,
      verticalAlign: 'middle'
    },
    scaleX: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'] // one label for every datapoint
    },
    scaleY: {
      guide: { // dashed lines
        visible: false
      },
      label: {
        text: 'Remaing effort (hours)',
        fontSize: '14px'
      }
    },
    scaleY2: {
      label: {
        text: 'Remaing and completed tasks',
        fontSize: '14px'
      },
      maxValue: 100,
      minValue: 0,
      step: 25 // can define scale step values or default
    },
    crosshairX: {
      lineColor: '#424242',
      lineGapSize: '4px',
      lineStyle: 'dotted',
      plotLabel: {
        padding: '15px',
        backgroundColor: 'white',
        bold: true,
        borderColor: '#e3e3e3',
        borderRadius: '5px',
        fontColor: '#2f2f2f',
        fontFamily: 'Lato',
        fontSize: '12px',
        shadow: true,
        shadowAlpha: 0.2,
        shadowBlur: 5,
        shadowColor: '#a1a1a1',
        shadowDistance: 4,
        textAlign: 'left'
      },
      scaleLabel: {
        backgroundColor: '#424242'
      }
    },
    series: [{
      type: 'line',
      text: 'Remaining Tasks',
      values: [35, 42, 67, 89, 25, 34, 67, 85].sort().reverse(),
      lineColor: '#42a5f5',
      marker: {
        visible: false
      },
      scales: 'scale-x, scale-y'
    },
      {
        type: 'line',
        text: 'Remaining Effort',
        values: [25, 32, 57, 79, 15, 24, 57, 75].sort().reverse(),
        lineColor: '#5c6bc0',
        marker: {
          type: 'square',
          backgroundColor: '#5c6bc0'
        },
        scales: 'scale-x, scale-y'
      },
      {
        type: 'line',
        text: 'Completed Tasks',
        values: [90, 80, 70, 60, 50, 40, 30, 20],
        lineColor: '#66bb6a',
        marker: {
          visible: false
        },
        scales: 'scale-x, scale-y'
      },
      {
        type: 'bar',
        text: 'Completed Tasks',
        values: [5, 10, 6, 3, 6, 2, 0, 9],
        backgroundColor: '#ffa726',
        scales: 'scale-x, scale-y-2'
      }
    ]
  };


  config2 = {
    graphset: [
      {
        type: 'mixed',
        series: [
          {
            type: 'bar',
            values: [59, 70, 40, 75, 33, 50, 65],
            'bar-width': '50%'
          },
          {
            type: 'line',
            values: [49, 30, 21, 15, 59, 51, 69],
            aspect: 'spline'
          }
        ]
      },
      {
        type: 'mixed',
        series: [
          {
            type: 'bar',
            values: [55, 71, 45, 77, 29, 40, 59],
            'bar-width': '50%'
          },
          {
            type: 'line',
            values: [40, 29, 33, 19, 50, 61, 66],
            aspect: 'spline'
          }
        ]
      },
      {
        type: 'mixed',
        series: [
          {
            type: 'bar',
            values: [49, 55, 70, 60, 55, 43, 55],
            'bar-width': '50%'
          },
          {
            type: 'line',
            values: [60, 34, 67, 27, 64, 71, 54],
            aspect: 'spline'
          }
        ]
      },
      {
        type: 'mixed',
        series: [
          {
            type: 'bar',
            values: [50, 41, 59, 79, 70, 61, 53],
            'bar-width': '50%'
          },
          {
            type: 'line',
            values: [59, 15, 29, 34, 51, 66, 75],
            aspect: 'spline'
          }
        ]
      }
    ]
  };

  constructor() {
  }

}
