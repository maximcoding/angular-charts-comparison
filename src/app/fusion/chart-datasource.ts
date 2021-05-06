import {FUSION_DATA_LABELS_VALUES} from './chart-fakeData';

export const fusionChartDataSource = {
  chart: {
    caption: 'TITLE',
    subCaption: 'SUBTITLE',
    xAxisName: 'X AXIS TITLE',
    yAxisName: 'Y AXIS TITLE',
    numberSuffix: 'K',
    theme: 'fusion',
  },
  data: [...FUSION_DATA_LABELS_VALUES]
};
