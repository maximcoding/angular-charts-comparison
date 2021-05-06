import {Component, NgZone, OnInit} from '@angular/core';

import * as FusionCharts from 'fusioncharts';

const dataUrl = 'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json';
const schemaUrl = 'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.scss']
})
export class FusionComponent {

  dataSource: any;
  type: string;
  width: string;
  height: string;

  dataSource2: any;
  type2: string;
  width2: string;
  height2: string;

  constructor() {
    // 1
    this.type = 'timeseries';
    this.width = '700';
    this.height = '400';
    this.dataSource = {
      data: null,
      caption: {
        text: 'Sales Analysis'
      },
      subcaption: {
        text: 'Grocery'
      },
      yAxis: [
        {
          plot: {
            value: 'Grocery Sales Value',
            type: 'line'
          },
          format: {
            prefix: '$'
          },
          title: 'Sale Value'
        }
      ]
    };
    this.fetchData();
    // 2

    this.type2 = 'timeseries';
    this.width2 = '100%';
    this.height2 = '400';

    // This is the dataSource of the chart
    this.dataSource2 = {
      caption: {
        text: 'NewYork City - Temparature variations (2019)'
      },
      subcaption: {
        text: 'Daily min, max and average temperatures'
      },
      chart: {
        showlegend: 0,
        showtooltip: 1
      },
      yaxis: [
        {
          title: 'Temperature in Celcius',
          plot: [
            {
              value: {
                high: 'High',
                low: 'Low'
              },
              type: 'column-range',
              name: 'Column ranged plot'
            }
          ]
        }
      ]
    };
    this.fetchData2();
  }

  private fetchData(): void {
    let jsonify = res => res.json();
    let dataFetch = fetch(dataUrl).then(jsonify);
    let schemaFetch = fetch(schemaUrl).then(jsonify);
    Promise.all([dataFetch, schemaFetch]).then(res => {
      let data = res[0];
      let schema = res[1];
      let fusionTable = new FusionCharts.DataStore().createDataTable(data, schema); // Instance of DataTable to be passed as data in dataSource
      this.dataSource.data = fusionTable;
    });
  }

  private fetchData2() {
    var jsonify = res => res.json();
    const dataFetch = fetch('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/data.json').then(jsonify);
    const schemaFetch = fetch('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/schema.json').then(jsonify);

    Promise.all([dataFetch, schemaFetch]).then(res => {
      const [data, schema] = res;
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.dataSource.data = fusionTable;
    });
  }

}
