import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {};
  width = 550;
  height = 400;

//
  title2 = 'Fruits distribution';
  type2 = 'ComboChart';
  data2 = [
    ['Apples', 3, 2, 2.5],
    ['Oranges', 2, 3, 2.5],
    ['Pears', 1, 5, 3],
    ['Bananas', 3, 9, 6],
    ['Plums', 4, 2, 3]
  ];
  columnNames2 = ['Fruits', 'Jane', 'Jone', 'Average'];
  options2 = {
    hAxis: {
      title: 'Person'
    },
    vAxis: {
      title: 'Fruits'
    },
    seriesType: 'bars',
    series: {2: {type: 'line'}}
  };
  width2 = 550;
  height2 = 400;

  constructor() {
  }

  ngOnInit(): void {
  }

}
