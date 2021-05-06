import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zing-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  config = {
    type: 'pie',
    plot: {
      borderColor: '#FFCB45',
      borderWidth: 3,
      // slice: 90,
      valueBox: {
        placement: 'out',
        text: '%t\n%npv%',
        fontFamily: 'Open Sans'
      },
      tooltip: {
        fontSize: '18',
        fontFamily: 'Open Sans',
        padding: '5 10',
        text: '%npv%'
      },
      animation: {
        effect: 3,
        method: 4,
        speed: 20000,
        sequence: 1,
        delay: 2000
      }
    },
    source: {
      text: 'gs.statcounter.com',
      fontColor: '#8e99a9',
      fontFamily: 'Open Sans'
    },
    // title: {
    //   fontColor: '#8e99a9',
    //   text: 'TITLE TITLE TITLE',
    //   align: 'left',
    //   offsetX: 10,
    //   fontFamily: 'Open Sans',
    //   fontSize: 25
    // },
    // subtitle: {
    //   offsetX: 10,
    //   offsetY: 10,
    //   fontColor: '#8e99a9',
    //   fontFamily: 'Open Sans',
    //   fontSize: '16',
    //   text: 'SUB TITLE SUB TITLE',
    //   align: 'left'
    // },
    plotarea: {
      margin: '20 0 0 0'
    },
    series: [{
      values: [11.38],
      text: 'Internet Explorer',
      backgroundColor: '#50ADF5',
    },
      {
        values: [56.94],
        text: 'Chrome',
        backgroundColor: '#e74f37',
        detached: false
      },
      {
        values: [14.52],
        text: 'Firefox',
        backgroundColor: '#FFCB45',
        detached: true
      },
      {
        text: 'Safari',
        values: [9.69],
        backgroundColor: '#6877e5'
      },
      {
        text: 'Other',
        values: [7.48],
        backgroundColor: '#23cb4f'
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
