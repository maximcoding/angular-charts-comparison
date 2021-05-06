import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FusionComponent} from './fusion.component';
import {FusionRoutingModule} from './fusion-routing.module';

import {FusionChartsModule} from 'angular-fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import {BarComponent} from './components/bar/bar.component';
import {ColumnWithScrollingComponent} from './components/column-with-scrolling/column-with-scrolling.component';
import {LineComponent} from './components/line/line.component';
import {GraphAxesComponent} from './components/graph-axes/graph-axes.component';
import {PieDoughnutComponent} from './components/pie-doughnut/pie-doughnut.component';
import {StackedGraphComponent} from './components/stacked-graph/stacked-graph.component';
import {CombinedGraphBarAreaComponent} from './components/combined-graph-bar-area/combined-graph-bar-area.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import {ScatterComponent} from './components/scatter/scatter.component';
import {SparklineComponent} from './components/sparkline/sparkline.component';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; // Import timeseries
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, TimeSeries);

@NgModule({
  declarations: [
    FusionComponent,
    GraphAxesComponent,
    LineComponent,
    StackedGraphComponent,
    BubbleComponent,
    CombinedGraphBarAreaComponent,
    PieDoughnutComponent,
    BarComponent,
    ColumnWithScrollingComponent,
    ScatterComponent,
    SparklineComponent,
  ],
  imports: [
    CommonModule,
    FusionRoutingModule,
    FusionChartsModule
  ]
})
export class FusionModule {
}
