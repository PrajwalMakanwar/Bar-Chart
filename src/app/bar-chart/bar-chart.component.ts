import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var myChart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 150, 120, 80, 60, 40],
            backgroundColor: [
              'rgba(240, 52, 52, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(240, 255, 0, 1)',
              'rgba(83, 51, 237, 1)',
              'rgba(102, 51, 153, 1)',
              'rgba(249, 105, 14, 1)',
            ],
            borderColor: [
              'rgba(240, 52, 52, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(240, 255, 0, 1)',
              'rgba(83, 51, 237, 1)',
              'rgba(102, 51, 153, 1)',
              'rgba(249, 105, 14, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
  }
  
}
