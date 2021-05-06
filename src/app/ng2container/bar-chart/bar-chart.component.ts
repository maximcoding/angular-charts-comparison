import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      backgroundColor: 'rgba(50,150,50,0.9)',
    }
  };
  // barChartType: ChartType = 'bar';
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartData: ChartDataSets[] = [
    { 
      data: [45, 37, 60, 70, 46, 33], 
      label: 'Best Fruits',

    },
    
  ];

}
