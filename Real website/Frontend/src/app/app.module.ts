import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";
import {NgxsModule} from "@ngxs/store";
import {DataState} from "./shared/data/data.state";
import { HeaderComponent } from './nav/header/header.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';
import { NgChartsModule } from 'ng2-charts';
import {ReactiveFormsModule} from "@angular/forms";

const config: SocketIoConfig = { url: 'https://realwebsite-nodejs-mysql.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemperatureChartComponent,
    HumidityChartComponent,
    SettingsComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsModule.forRoot([DataState], {
            developmentMode: !environment.production
        }),
        SocketIoModule.forRoot(config),
        NgChartsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
