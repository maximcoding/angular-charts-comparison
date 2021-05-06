import {Component, OnInit} from '@angular/core';
import {fusionChartConfig} from '../../chart.config';
import {fusionGraphStyles} from '../../chart-styles';
import {FusionChartEnum} from '../../chart-types.enum';


const doughnutData = {
  chart: {
    ...fusionChartConfig,
    showpercentvalues: '1',
    defaultcenterlabel: 'Android Distribution',
    aligncaptionwithcanvas: '0',
    captionpadding: '0',
    decimals: '1',
    centerlabel: '# Users: $value'
  },
  data: [
    {
      label: 'Ice Cream Sandwich',
      value: '1000'
    },
    {
      label: 'Jelly Bean',
      value: '5300'
    },
    {
      label: 'Kitkat',
      value: '10500'
    },
    {
      label: 'Lollipop',
      value: '18900'
    },
    {
      label: 'Marshmallow',
      value: '17904'
    }
  ]
};

const pieData = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};

const nestedPieData = {
  chart: {
    ...fusionChartConfig,
    showplotborder: '1',
    plotfillalpha: '60',
    hoverfillcolor: '#CCCCCC',
    numberprefix: '$'
  },
  category: [
    {
      label: 'Products',
      tooltext: 'Please hover over a sub-category to see details',
      color: '#ffffff',
      value: '150',
      category: [
        {
          label: 'Food & Beverage',
          color: '#f8bd19',
          value: '55.5',
          category: [
            {
              label: 'Breads',
              color: '#f8bd19',
              value: '11.1'
            },
            {
              label: 'Juice',
              color: '#f8bd19',
              value: '27.75'
            },
            {
              label: 'Noodles',
              color: '#f8bd19',
              value: '9.99'
            },
            {
              label: 'Seafood',
              color: '#f8bd19',
              value: '6.66'
            }
          ]
        },
        {
          label: 'Apparel',
          color: '#33ccff',
          value: '42',
          category: [
            {
              label: 'Sun Glasses',
              color: '#33ccff',
              value: '10.08'
            },
            {
              label: 'Clothing',
              color: '#33ccff',
              value: '18.9'
            },
            {
              label: 'Handbags',
              color: '#33ccff',
              value: '6.3'
            },
            {
              label: 'Shoes',
              color: '#33ccff',
              value: '6.72'
            }
          ]
        },
        {
          label: 'Baby Products',
          color: '#ffcccc',
          value: '22.5',
          category: [
            {
              label: 'Bath &{br}Grooming',
              color: '#ffcccc',
              value: '9.45'
            },
            {
              label: 'Food',
              color: '#ffcccc',
              value: '6.3'
            },
            {
              label: 'Diapers',
              color: '#ffcccc',
              value: '6.75'
            }
          ]
        },
        {
          label: 'Electronics',
          color: '#ccff66',
          value: '30',
          category: [
            {
              label: 'Laptops',
              color: '#ccff66',
              value: '8.1'
            },
            {
              label: 'Televisions',
              color: '#ccff66',
              value: '10.5'
            },
            {
              label: 'SmartPhones',
              color: '#ccff66',
              value: '11.4'
            }
          ]
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-fusion-pie-doughnut',
  templateUrl: './pie-doughnut.component.html',
  styleUrls: ['./pie-doughnut.component.scss']
})
export class PieDoughnutComponent implements OnInit {
  FusionChartEnum = FusionChartEnum;
  fusionChartConfig = fusionChartConfig;

  doughnutData = doughnutData;
  pieData = pieData;
  nestedPieData = nestedPieData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
