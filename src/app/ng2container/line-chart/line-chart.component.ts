import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    { 
      data: [85, 72, 78, 75, 77, 75], 
      label: 'Crude oil prices',
      fill: false,
     },
     { 
      data: [2, 10, 15, 75, 77, 75], 
      label: 'Crude oil prices',
      fill: false,
     },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(200,255,0,0.28)',
      borderWidth: 5,
      
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
