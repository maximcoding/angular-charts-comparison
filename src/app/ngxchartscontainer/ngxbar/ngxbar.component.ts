import { Component } from '@angular/core';

const single = [
  {
    "name": "Apple",
    "value": 45
  },
  {
    "name": "Banana",
    "value": 37
  },
  {
    "name": "Kiwifruit",
    "value": 60
  },
  {
    "name": "Blueberry",
    "value": 70
  },
  {
    "name": "Orange",
    "value": 46
  },
  {
    "name": "Grapes",
    "value": 33
  }
];


@Component({
  selector: 'app-ngxbar',
  templateUrl: './ngxbar.component.html',
  styleUrls: ['./ngxbar.component.scss']
})
export class NgxbarComponent {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
}
