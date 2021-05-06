import {FusionChartEnum} from './chart-types.enum';

export const fusionChartConfig = {
  width: '800',
  height: '400',
  type: FusionChartEnum.line,
  timeSeries: {
    CustomRangeSelector: {
      Enable: true
    }
  },
  dataFormat: 'json',
  // caption: 'TITLE',
  yaxisname: 'Y AXIS NAME',
  // subcaption: 'SUB TITLE',
  // showhovereffect: '1',
  // numbersuffix: '%',
  // drawcrossline: '1',
  plottooltext: '<b>$dataValue</b> PLOTTED HTML COMPONENT TEXT',
  theme: 'fusion',
  // rotatelabels: '',
  // setadaptiveymin: '',
  // palettecolors: '#E64571, #88D786',
  // plotgradientcolor: ' ',
  // yaxismaxvalue: '',
  // numdivlines: '',
  // showlegend: '',
  // interactivelegend: '',
  // showvalues: '',
  // showsum: ''
};
