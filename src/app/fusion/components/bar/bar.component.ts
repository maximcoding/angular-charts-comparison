import {Component} from '@angular/core';
import {FusionChartEnum} from '../../chart-types.enum';
import {fusionChartConfig} from '../../chart.config';

const dataBarColumnSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subcaption: 'In MMbbl = One Million barrels',
    xaxisname: 'Country',
    yaxisname: 'Reserves (MMbbl)',
    numbersuffix: 'K',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Venezuela',
      value: '290'
    },
    {
      label: 'Saudi',
      value: '260'
    },
    {
      label: 'Canada',
      value: '180'
    },
    {
      label: 'Iran',
      value: '140'
    },
    {
      label: 'Russia',
      value: '115'
    },
    {
      label: 'UAE',
      value: '100'
    },
    {
      label: 'US',
      value: '30'
    },
    {
      label: 'China',
      value: '30'
    }
  ]
};

const dataBarGroupedSource = {
  chart: {
    caption: 'Split of visitors by Channels',
    placevaluesinside: '1',
    showvalues: '0',
    plottooltext: '<b>$dataValue</b> visitors from $label in $seriesName',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Organic'
        },
        {
          label: 'Offline Stores'
        },
        {
          label: 'Email Campaigns'
        },
        {
          label: 'Social Events'
        },
        {
          label: 'Paid Channels'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: '2017',
      data: [
        {
          value: '17000'
        },
        {
          value: '19500'
        },
        {
          value: '12500'
        },
        {
          value: '14500'
        },
        {
          value: '17500'
        }
      ]
    },
    {
      seriesname: '2018',
      data: [
        {
          value: '25400'
        },
        {
          value: '29800'
        },
        {
          value: '21800'
        },
        {
          value: '19500'
        },
        {
          value: '21200'
        }
      ]
    }
  ],
  trendlines: [
    {
      line: [
        {
          startvalue: '16200',
          color: '#5D62B5',
          thickness: '1.5',
          displayvalue: '2017\'s Avg.'
        },
        {
          startvalue: '23500',
          color: '#29C3BE',
          thickness: '1.5',
          displayvalue: '2018\'s Avg.'
        }
      ]
    }
  ]
};

const dataBarStackerWithCustomLabelsSource = {
  chart: {
    caption: 'Top Finishers',
    subcaption: '2016-2017',
    yaxisname: 'Open Play Goals',
    palettecolors: '#E64571, #88D786',
    plotgradientcolor: ' ',
    theme: 'fusion',
    yaxismaxvalue: '30',
    numdivlines: '2',
    showlegend: '1',
    interactivelegend: '0',
    showvalues: '0',
    showsum: '0'
  },
  categories: [
    {
      category: [
        {
          label: 'L.Suarez'
        },
        {
          label: 'L.Messi'
        },
        {
          label: 'G.Higuain'
        },
        {
          label: 'Z.Ibrahimovic'
        },
        {
          label: 'Diego Costa'
        },
        {
          label: 'H.Kane'
        },
        {
          label: 'D.Alli'
        },
        {
          label: 'A.Griezmann'
        },
        {
          label: 'Heung-Min Son'
        },
        {
          label: 'S.Mane'
        },
        {
          label: 'J.King'
        },
        {
          label: 'O.Giroud'
        },
        {
          label: 'R.Nainggolan'
        },
        {
          label: 'A.Robben'
        },
        {
          label: 'Pablo Sarabia'
        },
        {
          label: 'Isco'
        },
        {
          label: 'Rafinha'
        },
        {
          label: 'F.Bernardeschi'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: '2016',
      data: [
        {
          value: '25'
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
          value: '16'
        },
        {
          value: '14'
        },
        {
          value: '13'
        },
        {
          value: '11'
        },
        {
          value: '9'
        },
        {
          value: '10'
        },
        {
          value: '10'
        },
        {
          value: '7'
        },
        {
          value: '8'
        },
        {
          value: '8'
        },
        {
          value: '7'
        },
        {
          value: '6'
        },
        {
          value: '6'
        },
        {
          value: '3'
        }
      ]
    },
    {
      seriesname: '2017',
      data: [
        {
          value: '5'
        },
        {
          value: '8'
        },
        {
          value: '6'
        },
        {
          value: '3'
        },
        {
          value: '2'
        },
        {
          value: '3'
        },
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '5'
        },
        {
          value: '4'
        },
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '2'
        },
        {
          value: '3'
        },
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '2'
        },
        {
          value: '4'
        }
      ]
    }
  ],
  annotations: {
    groups: [
      {
        id: 'infobar',
        items: [
          {
            id: '1',
            type: 'line',
            x: '$dataset.1.set.1.endx+10',
            y: '$dataset.1.set.1.y',
            tox: '$dataset.1.set.1.endx+50',
            toy: '$dataset.1.set.1.y',
            color: '#2F9AC4',
            dashed: '0',
            thickness: '1'
          },
          {
            id: '2',
            type: 'line',
            x: '$dataset.1.set.1.endx+50',
            y: '$dataset.1.set.1.y',
            tox: '$dataset.1.set.1.endx+50',
            toy: '$dataset.0.set.1.y+50',
            color: '#2F9AC4',
            dashed: '0',
            thickness: '1'
          },
          {
            id: '3',
            type: 'line',
            x: '$dataset.1.set.17.endx+5',
            y: '$dataset.1.set.17.y',
            tox: '$dataset.1.set.17.endx+200',
            toy: '$dataset.0.set.17.y',
            color: '#2F9AC4',
            dashed: '0',
            thickness: '1'
          },
          {
            id: '4',
            type: 'line',
            x: '$dataset.1.set.17.endx+200',
            y: '$dataset.0.set.17.y',
            tox: '$dataset.1.set.17.endx+200',
            toy: '$dataset.0.set.17.y-40',
            color: '#2F9AC4',
            dashed: '0',
            thickness: '1'
          },
          {
            id: 'shape',
            type: 'polygon',
            startangle: '180',
            sides: '3',
            radius: '6',
            color: '#2F9AC4',
            x: '$dataset.1.set.17.endx+10',
            y: '$dataset.1.set.17.y'
          },
          {
            id: 'shape',
            type: 'polygon',
            startangle: '180',
            sides: '3',
            radius: '6',
            color: '2F9AC4',
            x: '$dataset.1.set.1.endx+10',
            y: '$dataset.1.set.1.y'
          },
          {
            id: 'label1',
            align: 'RiGHT',
            type: 'text',
            text: 'Messi added{br}roughly 7 Goals from{br}his shot quality',
            fillcolor: '#2F9AC4',
            rotate: '90',
            x: '$dataset.1.set.1.endx+65',
            y: '$dataset.0.set.5.y'
          },
          {
            id: 'label2',
            align: 'CENTER',
            type: 'text',
            text:
              'Bernardeschi{br}more than doubled{br}his chance quality{br}through shooting',
            fillcolor: '#2F9AC4',
            rotate: '90',
            x: '$dataset.1.set.17.endx+200',
            y: '$dataset.0.set.13.y'
          }
        ]
      }
    ]
  }
};

const dataBarOverlappedBarsSource = {
  chart: {
    caption: 'Sales Targets vs Achieved',
    subcaption: 'Bilbus',
    yaxisname: 'Revenue (In USD)',
    numberprefix: '$',
    drawcrossline: '1',
    theme: 'fusion',
    showvalues: '0'
  },
  categories: [
    {
      category: [
        {
          label: 'Oliver'
        },
        {
          label: 'Andy'
        },
        {
          label: 'Peter'
        },
        {
          label: 'Natasha'
        },
        {
          label: 'Robert'
        },
        {
          label: 'Bruce'
        },
        {
          label: 'Wanda'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Target',
      data: [
        {
          value: '250000'
        },
        {
          value: '200000'
        },
        {
          value: '300000'
        },
        {
          value: '200000'
        },
        {
          value: '270000'
        },
        {
          value: '350000'
        },
        {
          value: '200000'
        }
      ]
    },
    {
      seriesname: 'Achieved',
      data: [
        {
          value: '260000'
        },
        {
          value: '180000'
        },
        {
          value: '290000'
        },
        {
          value: '195000'
        },
        {
          value: '300000'
        },
        {
          value: '380000'
        },
        {
          value: '210000'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-fusion-bar',
  templateUrl: './bar.component.html' /* see HTML tab */
})
export class BarComponent {
  public FusionChartEnum = FusionChartEnum;
  public fusionChartConfig = fusionChartConfig;
  public dataBarColumnSource = dataBarColumnSource;
  public dataBarGroupedSource = dataBarGroupedSource;
  public dataBarStackerWithCustomLabelsSource = dataBarStackerWithCustomLabelsSource;
  public dataBarOverlappedBarsSource = dataBarOverlappedBarsSource;
}
