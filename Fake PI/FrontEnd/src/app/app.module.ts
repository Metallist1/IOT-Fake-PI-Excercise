import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureChangeComponent } from './temperature-change/temperature-change.component';
import { HumidityChangeComponent } from './humidity-change/humidity-change.component';
import { SettingsChangeComponent } from './settings-change/settings-change.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TemperatureChangeComponent,
    HumidityChangeComponent,
    SettingsChangeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
