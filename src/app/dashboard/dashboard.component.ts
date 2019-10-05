import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private usersChart: Chart = null;
  private operatingCostChart: Chart = null;
 

  constructor() { }

  ngOnInit() {
    this.usersChart = this.chartData();
    this.operatingCostChart = this.operatingCost();
  }

  public chartData(): Chart {
    var data = {
      labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Monthly active users in millions",
        fill: true,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [1,5, 4.0, 6.9, 7.4, 6.2, 7.0, 8.0, 7.9, 8.6, 9.1, 8.6, 9.8],
      }]
    };

    var myChart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: data,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Monthly active users in millions'
        }
      }
    });

    return myChart;
  }

  private operatingCost(): Chart {
    var data = {
      labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Monthly operating cost",
        fill: true,
        borderColor: '#00d6b4',
        borderWidth: 0,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: '00d6b4',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [3.5, 4.0, 2.9, 3.4, 4.2, 3.9, 5.0, 4.9, 4.6, 4.1, 4.0, 2.0],

      }]
    };

    var myChart = new Chart(document.getElementById('opertionCost'), {
      type: 'line',
      data: data,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Monthly operation cost in millions'
        }
      }
    });

    return myChart;
  }


}
