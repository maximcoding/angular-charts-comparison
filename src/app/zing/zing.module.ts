import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZingchartAngularModule} from 'zingchart-angular';
import {ZingComponent} from './zing.component';
import {ZingRoutingModule} from './zing-routing.module';
import {GraphAxesComponent} from './components/graph-axes/graph-axes.component';
import {LineComponent} from './components/line/line.component';
import {BarComponent} from './components/bar/bar.component';
import {DoughnutComponent} from './components/doughnut/doughnut.component';
import {PieComponent} from './components/pie/pie.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import {ScatterComponent} from './components/scatter/scatter.component';
import {StackedGraphComponent} from './components/stacked-graph/stacked-graph.component';
import {CombinedGraphBarAreaComponent} from './components/combined-graph-bar-area/combined-graph-bar-area.component';
import {SparklineComponent} from './components/sparkline/sparkline.component';
import {RangeComponent} from './components/range/range.component';


@NgModule({
  declarations: [ZingComponent, GraphAxesComponent, LineComponent, BarComponent, DoughnutComponent, PieComponent, BubbleComponent, ScatterComponent, StackedGraphComponent, CombinedGraphBarAreaComponent, SparklineComponent, RangeComponent],
  imports: [
    CommonModule,
    ZingchartAngularModule,
    ZingRoutingModule
  ]
})
export class ZingModule {
}
