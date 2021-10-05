import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {Select, Store} from "@ngxs/store";
import {DataState} from "../shared/data/data.state";
import {Observable} from "rxjs";
import {Update} from "../shared/data/entities/update";

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss']
})
export class HumidityChartComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Humidity',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  // @ts-ignore
  // @ts-ignore
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {}
    },

    plugins: {
      legend: { display: true },
      // @ts-ignore
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              enabled: true,
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


  // @ts-ignore
  @Select(DataState.getHumidity) allHumidity: Observable<Update[]>;
  humidity: Update[] | undefined;

  constructor(private store: Store) {
    // @ts-ignore
    this.allHumidity.subscribe((data) => {
      this.lineChartData.datasets[0].data = [];
      this.lineChartData.labels = [];
      for (let i = 0; i < data.length; i++) {
        this.lineChartData.datasets[0].data?.push(data[i].value);
        var d = new Date(parseInt(data[i].measuretime, 10));
        var ds = d.toLocaleString();
        this.lineChartData.labels?.push(ds);
      }
      this.chart?.update();
    });
  }

  ngOnInit(): void {
  }
}
