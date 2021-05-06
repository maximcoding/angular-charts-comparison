import {Component, OnInit} from '@angular/core';
import {FusionChartEnum} from '../../chart-types.enum';
import {fusionChartConfig} from '../../chart.config';


const stackedBarData = {
  chart: {
    caption: 'Split of visitors by Channels & Gender',
    placevaluesinside: '1',
    showvalues: '0',
    plottooltext: '<b>$dataValue</b>  $seriesName visitors',
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
      seriesname: 'Male',
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
      seriesname: 'Female',
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
  ]
};

const stackedColumnsData = {
  chart: {
    caption: 'Yearly Energy Production Rate',
    subcaption: ' Top 5 Developed Countries',
    numbersuffix: ' TWh',
    showsum: '1',
    plottooltext:
      '$label produces <b>$dataValue</b> of energy from $seriesName',
    theme: 'fusion',
    drawcrossline: '1'
  },
  categories: [
    {
      category: [
        {
          label: 'Canada'
        },
        {
          label: 'China'
        },
        {
          label: 'Russia'
        },
        {
          label: 'Australia'
        },
        {
          label: 'United States'
        },
        {
          label: 'France'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Coal',
      data: [
        {
          value: '400'
        },
        {
          value: '830'
        },
        {
          value: '500'
        },
        {
          value: '420'
        },
        {
          value: '790'
        },
        {
          value: '380'
        }
      ]
    },
    {
      seriesname: 'Hydro',
      data: [
        {
          value: '350'
        },
        {
          value: '620'
        },
        {
          value: '410'
        },
        {
          value: '370'
        },
        {
          value: '720'
        },
        {
          value: '310'
        }
      ]
    },
    {
      seriesname: 'Nuclear',
      data: [
        {
          value: '210'
        },
        {
          value: '400'
        },
        {
          value: '450'
        },
        {
          value: '180'
        },
        {
          value: '570'
        },
        {
          value: '270'
        }
      ]
    },
    {
      seriesname: 'Gas',
      data: [
        {
          value: '180'
        },
        {
          value: '330'
        },
        {
          value: '230'
        },
        {
          value: '160'
        },
        {
          value: '440'
        },
        {
          value: '350'
        }
      ]
    },
    {
      seriesname: 'Oil',
      data: [
        {
          value: '60'
        },
        {
          value: '200'
        },
        {
          value: '200'
        },
        {
          value: '50'
        },
        {
          value: '230'
        },
        {
          value: '150'
        }
      ]
    }
  ]
};

const groupedStackedData = {
  chart: {
    caption: "Break-up of Annual Revenue",
    subcaption: "In Million $",
    xaxisname: "Year",
    yaxisname: "Sales in M$",
    numberprefix: "$",
    numbersuffix: "M",
    showsum: "1",
    plottooltext:
      "Revenue from <b>$seriesName</b> in $label was <b>$dataValue</b>",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        }
      ]
    }
  ],
  dataset: [
    {
      dataset: [
        {
          seriesname: "Developer libraries",
          data: [
            {
              value: "30"
            },
            {
              value: "26"
            },
            {
              value: "29"
            },
            {
              value: "31"
            },
            {
              value: "34"
            }
          ]
        },
        {
          seriesname: "Business Tools",
          data: [
            {
              value: "21"
            },
            {
              value: "28"
            },
            {
              value: "39"
            },
            {
              value: "41"
            },
            {
              value: "24"
            }
          ]
        }
      ]
    },
    {
      dataset: [
        {
          seriesname: "Infrastructure Consulting",
          data: [
            {
              value: "27"
            },
            {
              value: "25"
            },
            {
              value: "28"
            },
            {
              value: "26"
            },
            {
              value: "10"
            }
          ]
        },
        {
          seriesname: "Training",
          data: [
            {
              value: "17"
            },
            {
              value: "15"
            },
            {
              value: "18"
            },
            {
              value: "16"
            },
            {
              value: "10"
            }
          ]
        },
        {
          seriesname: "AMC",
          data: [
            {
              value: "12"
            },
            {
              value: "17"
            },
            {
              value: "16"
            },
            {
              value: "15"
            },
            {
              value: "12"
            }
          ]
        }
      ]
    }
  ]
};

const stackerNegativeColumnData = {
  chart: {
    caption: 'Monthly recurring revenue',
    yaxisname: 'Revenue',
    subcaption: '(On GAAP basis)',
    numberprefix: '$',
    yaxisminvalue: '-2000',
    showsum: '1',
    plottooltext:
      '$seriesName in $label was <b>$dataValue</b>  ($percentValue of monthly total)',
    decimals: '1',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Dec-17'
        },
        {
          label: 'Jan-18'
        },
        {
          label: 'Feb-18'
        },
        {
          label: 'Mar-18'
        },
        {
          label: 'Apr-18'
        },
        {
          label: 'May-18'
        },
        {
          label: 'Jun-18'
        },
        {
          label: 'Jul-18'
        },
        {
          label: 'Aug-18'
        },
        {
          label: 'Sep-18'
        },
        {
          label: 'Oct-18'
        },
        {
          label: 'Nov-18'
        },
        {
          label: 'Dec-18'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'MRR',
      data: [
        {
          value: '810'
        },
        {
          value: '930'
        },
        {
          value: '1110'
        },
        {
          value: '1300'
        },
        {
          value: '1890'
        },
        {
          value: '2350'
        },
        {
          value: '2740'
        },
        {
          value: '3050'
        },
        {
          value: '3570'
        },
        {
          value: '4390'
        },
        {
          value: '5610'
        },
        {
          value: '7160'
        },
        {
          value: '7750'
        }
      ]
    },
    {
      seriesname: 'New business',
      data: [
        {
          value: '380'
        },
        {
          value: '390'
        },
        {
          value: '420'
        },
        {
          value: '490'
        },
        {
          value: '900'
        },
        {
          value: '1160'
        },
        {
          value: '1350'
        },
        {
          value: '1510'
        },
        {
          value: '1790'
        },
        {
          value: '2140'
        },
        {
          value: '2660'
        },
        {
          value: '3850'
        },
        {
          value: '4070'
        }
      ]
    },
    {
      seriesname: 'Upsell',
      data: [
        {
          value: '220'
        },
        {
          value: '240'
        },
        {
          value: '280'
        },
        {
          value: '350'
        },
        {
          value: '580'
        },
        {
          value: '630'
        },
        {
          value: '670'
        },
        {
          value: '740'
        },
        {
          value: '790'
        },
        {
          value: '920'
        },
        {
          value: '1050'
        },
        {
          value: '1290'
        },
        {
          value: '1320'
        }
      ]
    },
    {
      seriesname: 'Consulting',
      data: [
        {
          value: '0'
        },
        {
          value: '0'
        },
        {
          value: '0'
        },
        {
          value: '20'
        },
        {
          value: '50'
        },
        {
          value: '50'
        },
        {
          value: '60'
        },
        {
          value: '60'
        },
        {
          value: '60'
        },
        {
          value: '80'
        },
        {
          value: '130'
        },
        {
          value: '170'
        },
        {
          value: '170'
        }
      ]
    },
    {
      seriesname: 'Churn',
      data: [
        {
          value: '-50'
        },
        {
          value: '-50'
        },
        {
          value: '-70'
        },
        {
          value: '-90'
        },
        {
          value: '-100'
        },
        {
          value: '-110'
        },
        {
          value: '-150'
        },
        {
          value: '-260'
        },
        {
          value: '-320'
        },
        {
          value: '-350'
        },
        {
          value: '-500'
        },
        {
          value: '-630'
        },
        {
          value: '-650'
        }
      ]
    },
    {
      seriesname: 'Downgrades',
      data: [
        {
          value: '-180'
        },
        {
          value: '-210'
        },
        {
          value: '-260'
        },
        {
          value: '-320'
        },
        {
          value: '-580'
        },
        {
          value: '-680'
        },
        {
          value: '-780'
        },
        {
          value: '-900'
        },
        {
          value: '-1060'
        },
        {
          value: '-1320'
        },
        {
          value: '-1520'
        },
        {
          value: '-1650'
        },
        {
          value: '-1660'
        }
      ]
    }
  ]
};

const stackedBarAreaData = {
  chart: {
    caption: 'Yearly Energy Production',
    numbersuffix: ' TWh',
    formatnumberscale: '0',
    showvalues: '0',
    drawcrossline: '1',
    showsum: '1',
    plottooltext: '$dataValue from $seriesName',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Canada'
        },
        {
          label: 'China'
        },
        {
          label: 'Russia'
        },
        {
          label: 'Australia'
        },
        {
          label: 'United States'
        },
        {
          label: 'France'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Coal',
      data: [
        {
          value: '400'
        },
        {
          value: '830'
        },
        {
          value: '500'
        },
        {
          value: '420'
        },
        {
          value: '790'
        },
        {
          value: '380'
        }
      ]
    },
    {
      seriesname: 'Hydro',
      data: [
        {
          value: '350'
        },
        {
          value: '620'
        },
        {
          value: '410'
        },
        {
          value: '370'
        },
        {
          value: '720'
        },
        {
          value: '310'
        }
      ]
    },
    {
      seriesname: 'Nuclear',
      data: [
        {
          value: '210'
        },
        {
          value: '400'
        },
        {
          value: '450'
        },
        {
          value: '180'
        },
        {
          value: '570'
        },
        {
          value: '270'
        }
      ]
    },
    {
      seriesname: 'Gas',
      data: [
        {
          value: '180'
        },
        {
          value: '330'
        },
        {
          value: '230'
        },
        {
          value: '160'
        },
        {
          value: '440'
        },
        {
          value: '350'
        }
      ]
    },
    {
      seriesname: 'Oil',
      data: [
        {
          value: '60'
        },
        {
          value: '200'
        },
        {
          value: '200'
        },
        {
          value: '50'
        },
        {
          value: '230'
        },
        {
          value: '150'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-fusion-stacked-graph',
  templateUrl: './stacked-graph.component.html',
  styleUrls: ['./stacked-graph.component.scss']
})
export class StackedGraphComponent implements OnInit {

  FusionChartEnum = FusionChartEnum;

  stackedBarData = stackedBarData;
  stackedColumnsData = stackedColumnsData;
  groupedStackedData = groupedStackedData;
  stackedBarAreaData = stackedBarAreaData;
  stackerNegativeColumnData = stackerNegativeColumnData;
  fusionConfig = fusionChartConfig;


  constructor() {
  }

  ngOnInit(): void {
  }

}
