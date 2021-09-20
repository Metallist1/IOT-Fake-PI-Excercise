import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TemperatureChartComponent} from "./temperature-chart/temperature-chart.component";
import {HumidityChartComponent} from "./humidity-chart/humidity-chart.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [ {
  path: '',
  component: MainComponent,
},

  {
    path: 'temperature',
    component: TemperatureChartComponent,
  },

  {
    path: 'humidity',
    component: HumidityChartComponent,
  },

  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
