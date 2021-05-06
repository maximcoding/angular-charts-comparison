import {Component, OnInit} from '@angular/core';
import {fusionChartConfig} from '../../chart.config';

const lineData = {
  chart: {
    caption: 'Tesla Stock Price',
    subcaption: 'May 2018',
    numberprefix: '$',
    charttopmargin: '10',
    theme: 'fusion',
    showclosevalue: '1',
    showopenvalue: '1',
    setadaptiveymin: '1'
  },
  dataset: [
    {
      data: [
        {
          tooltext: '2-May: <b>$dataValue</b>',
          value: 251.3
        },
        {
          tooltext: '3-May: <b>$dataValue</b>',
          value: 230.93
        },
        {
          tooltext: '4-May: <b>$dataValue</b>',
          value: 240.41
        },
        {
          tooltext: '7-May: <b>$dataValue</b>',
          value: 255.7
        },
        {
          tooltext: '8-May: <b>$dataValue</b>',
          value: 257.91
        },
        {
          tooltext: '9-May: <b>$dataValue</b>',
          value: 253.4
        },
        {
          tooltext: '11-May: <b>$dataValue</b>',
          value: 252.49
        },
        {
          tooltext: '14-May: <b>$dataValue</b>',
          value: 250.91
        },
        {
          tooltext: '15-May: <b>$dataValue</b>',
          value: 239.11
        },
        {
          tooltext: '16-May: <b>$dataValue</b>',
          value: 240.15
        },
        {
          tooltext: '17-May: <b>$dataValue</b>',
          value: 244.76
        },
        {
          tooltext: '18-May: <b>$dataValue</b>',
          value: 236.69
        },
        {
          tooltext: '22-May: <b>$dataValue</b>',
          value: 234.55
        },
        {
          tooltext: '23-May: <b>$dataValue</b>',
          value: 235.45
        },
        {
          tooltext: '24-May: <b>$dataValue</b>',
          value: 238.02
        },
        {
          tooltext: '25-May: <b>$dataValue</b>',
          value: 238.9
        },
        {
          tooltext: '28-May: <b>$dataValue</b>',
          value: 239.9
        },
        {
          tooltext: '29-May: <b>$dataValue</b>',
          value: 245.7
        },
        {
          tooltext: '30-May: <b>$dataValue</b>',
          value: 246.3
        }
      ]
    }
  ]
};

const bulletData = {
  chart: {
    caption: 'Website downloads for 2017',
    subcaption: 'Actual vs Target',
    numbersuffix: 'K',
    theme: 'fusion',
    plottooltext:
      'Downloaded $datavalue times against a target of $targetDataValue'
  },
  colorrange: {
    color: [
      {
        minvalue: '0',
        maxvalue: '50',
        code: '#F2726F'
      },
      {
        minvalue: '50',
        maxvalue: '75',
        code: '#FFC533'
      },
      {
        minvalue: '75',
        maxvalue: '100',
        code: '#62B58F'
      }
    ]
  },
  value: '90',
  target: '95'
};

@Component({
  selector: 'app-fusion-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss']
})
export class SparklineComponent implements OnInit {

  lineData = lineData;
  bulletData = bulletData;
  config = fusionChartConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

}
