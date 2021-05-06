import {Component, OnInit} from '@angular/core';

const data = {
  chart: {
    caption: 'TITLE ',
    subcaption: 'SUB TITLE',
    yaxisname: 'Y AXIS NAME',
    numvisibleplot: '8',
    labeldisplay: 'auto',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'USA'
        },
        {
          label: 'GB'
        },
        {
          label: 'China'
        },
        {
          label: 'Russia'
        },
        {
          label: 'Germany'
        },
        {
          label: 'France'
        },
        {
          label: 'Japan'
        },
        {
          label: 'Australia'
        },
        {
          label: 'Italy'
        },
        {
          label: 'Canada'
        },
        {
          label: 'South Korea'
        },
        {
          label: 'Netherlands'
        },
        {
          label: 'Brazil'
        },
        {
          label: 'NZ'
        },
        {
          label: 'Spain'
        },
        {
          label: 'Hungary'
        },
        {
          label: 'Kenya'
        },
        {
          label: 'Jamaica'
        },
        {
          label: 'Cuba'
        },
        {
          label: 'Croatia'
        }
      ]
    }
  ],
  dataset: [{
    seriesname: '2017',
    data: [
      {
        value: '121'
      },
      {
        value: '70'
      },
      {
        value: '67'
      },
      {
        value: '55'
      },
      {
        value: '42'
      },
      {
        value: '42'
      },
      {
        value: '41'
      },
      {
        value: '29'
      },
      {
        value: '28'
      },
      {
        value: '22'
      },
      {
        value: '21'
      },
      {
        value: '19'
      },
      {
        value: '19'
      },
      {
        value: '18'
      },
      {
        value: '17'
      },
      {
        value: '15'
      },
      {
        value: '13'
      },
      {
        value: '11'
      },
      {
        value: '11'
      },
      {
        value: '10'
      }
    ]
  },
    {
      seriesname: '2016',
      data: [
        {
          value: '123'
        },
        {
          value: '71'
        },
        {
          value: '59'
        },
        {
          value: '52'
        },
        {
          value: '34'
        },
        {
          value: '32'
        },
        {
          value: '29'
        },
        {
          value: '32'
        },
        {
          value: '25'
        },
        {
          value: '21'
        },
        {
          value: '24'
        },
        {
          value: '17'
        },
        {
          value: '20'
        },
        {
          value: '14'
        },
        {
          value: '13'
        },
        {
          value: '16'
        },
        {
          value: '14'
        },
        {
          value: '12'
        },
        {
          value: '11'
        },
        {
          value: '9'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-fusion-column-with-scrolling',
  templateUrl: './column-with-scrolling.component.html',
  styleUrls: ['./column-with-scrolling.component.scss']
})
export class ColumnWithScrollingComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'scrollcolumn2d';
  dataFormat = 'json';
  dataSource = data;

  constructor() {
  }

  ngOnInit(): void {
  }

}
