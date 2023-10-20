import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chartEl: Chart<"bar", number[], string>;

  constructor() {

  }

  ngOnInit(): void {
    Chart.register(...registerables);
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
        label: 'My Second Dataset',
        data: [60, 49, 60, 71, 76, 65, 50],
        fill: false,
        backgroundColor: [
          'rgba(235, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(121, 192, 192, 0.2)',
          'rgba(54, 162, 239, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 217, 0.2)'
        ],
        borderColor: [
          'rgb(235, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(121, 192, 192)',
          'rgb(54, 162, 239)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 217)'
        ],
        borderWidth: 1
      },
      {
        axis: 'y',
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
    };
    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
      }
    };

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.chartEl = new Chart(ctx, {
      data: data,
      type: 'bar',
      options: {
        indexAxis: 'y'
      }
    });
  }
}
