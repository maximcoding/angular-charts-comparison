import { Component, OnInit } from '@angular/core';

const data = [
  {
    "name": "Crude oil prices",
    "series": [
      {
        "name": "January",
        "value": 85
      },
      {
        "name": "February",
        "value": 72
      },
      {
        "name": "March",
        "value": 78
      },
      {
        "name": "April",
        "value": 75
      },
      {
        "name": "May",
        "value": 77
      },
      {
        "name": "June",
        "value": 75
      }
    ]
  },
]

@Component({
  selector: 'app-ngxline',
  templateUrl: './ngxline.component.html',
  styleUrls: ['./ngxline.component.scss']
})
export class NgxlineComponent {

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  constructor() {
    Object.assign(this, { multi: data });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
