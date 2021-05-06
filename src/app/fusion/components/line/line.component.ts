import {Component, OnInit} from '@angular/core';
import {fusionChartConfig} from '../../chart.config';
import {
  FUSION_DATA_LINE_MULTIPLE_AXES_CATEGORIES,
  FUSION_DATA_LINE_MULTIPLE_AXES_DATASET,
  FUSION_DATA_LINE_MULTIPLE_CATEGORIES,
  FUSION_DATA_LINE_MULTIPLE_SERIES_DATASET,
} from '../../chart-fakeData';
import {FusionChartEnum} from '../../chart-types.enum';

const dataSimpleLine = {
  chart: {
    ...fusionChartConfig,
    numbersuffix: ' sufix number',
    showLegend: '1',
    rotatelabels: '1',
    showVLineLabelBorder: '1',
    setadaptiveymin: '1'
  },
  data: [{
    'label': 'Fri',
    'value': '5529'
  },
    {
      'vline': 'true',
      'showOnTop': '1',
      'label': 'Weekend Start',
      'linePosition': '0.7',
      'labelPosition': '0.5',
      'labelVAlign': 'middle',
      'labelHAlign': 'right',
      'color': '#6da81e',
      'thickness': '2',
      'alpha': '50',
      'dashed': '1',
      'dashLen': '4',
      'dashGap': '2'
    },
    {
      'label': 'Sat',
      'value': '5803'
    },
    {
      'label': 'Sun',
      'value': '6202'
    }]
};

const dataWithMultipleSeries = {
  chart: {
    ...fusionChartConfig,
    showlegend: '1',
    legendPosition: 'right',
    legendAllowDrag: '1',
    legendIconScale: '2'
  },
  categories: FUSION_DATA_LINE_MULTIPLE_CATEGORIES,
  dataset: FUSION_DATA_LINE_MULTIPLE_SERIES_DATASET
};

const dataWithMultipleAxes = {
  chart: {
    // caption: 'IBRD Subscriptions and Voting Powers',
    // subcaption: 'For OECD countries',
    showvalues: '0',
    labeldisplay: 'ROTATE',
    rotatelabels: '1',
    plothighlighteffect: 'fadeout',
    plottooltext: '$seriesName in $label : <b>$dataValue</b>',
    theme: 'fusion'
  },
  axis: FUSION_DATA_LINE_MULTIPLE_AXES_DATASET,
  categories: FUSION_DATA_LINE_MULTIPLE_AXES_CATEGORIES
};

@Component({
  selector: 'app-fusion-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  FusionChartEnum = FusionChartEnum;
  fusionChartConfig = fusionChartConfig;
  dataSourceLine = dataSimpleLine;
  dataSourceMultiple = dataWithMultipleSeries;
  dataWithMultipleAxes = dataWithMultipleAxes;

  constructor() {
  }

  ngOnInit(): void {
  }

}
