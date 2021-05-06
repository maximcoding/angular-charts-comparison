import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxdoughnut',
  templateUrl: './ngxdoughnut.component.html',
  styleUrls: ['./ngxdoughnut.component.scss']
})
export class NgxdoughnutComponent {

  series = [
    {
      "name": "Retired",
      "value": 20,
      "label": "20%"
    },
    {
      "name": "Employed",
      "value": 70,
      "label": "70%"
    },
    {
      "name": "Unemployed",
      "value": 10,
      "label": "10%"
    }
  ];


  constructor() { }

  pieChartLabel(series: any[], name: string): string {
    const item = series.filter(data => data.name === name);
    if (item.length > 0) {
        return item[0].label;
    }
    return name;
}
}
