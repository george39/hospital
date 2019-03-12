import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dana',
  templateUrl: './grafico-dana.component.html',
  styleUrls: ['./grafico-dana.component.css']
})
export class GraficoDanaComponent implements OnInit {

 @Input('chartLabels') public doughnutChartLabels: string[] = [];
 @Input('chartData') public doughnutChartData: number[] =  [];
 @Input('chartType') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
