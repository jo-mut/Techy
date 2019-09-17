import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private canvas;
  private context;
  private randomBinaries: number[] = [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1];
  private randomColor: string[] = ["red", "green", "yellow", "white", "violet"];
  private counts: number = 0;
  private previous: number = 0;
  private current: number = 0;
  public bins: string[] = [];
  public color: string = "";
 

  constructor() { }

  ngOnInit() {
    while (this.counts < 1000) {
      this.choseColor();
      this.choseBin();
    }
  }

  public chartData(): Chart {
    var data = {
      labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Monthly active users",
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
        responsive: true,
        data: [1,5, 4.0, 6.9, 7.4, 6.2, 7.0, 8.0, 7.9, 8.6, 9.1, 8.6, 9.8],
      }]
    };

    this.canvas = document.getElementById('chart');
    this.context = this.canvas.getContext('2d');
    var myChart = new Chart(this.context, {
      type: 'line',
      data: data,
    });

    return myChart;
  }

  private choseBin() {
    let random = Math.trunc((Math.random() * 14));
    this.bins.push((this.randomBinaries[random.toString()]));
    if (this.bins.length == this.previous + 9) {
      this.bins.push("\n");
      this.counts += 1;
      this.previous = this.previous + 10;

    }

    // console.log(this.counts);
    // console.log(this.previous + " previous");
    // console.log(this.bins);
  }

  private choseColor() {
    let random = (Math.trunc(Math.random() * 6))
    this.color = this.randomColor[random];
  }

  binColor(): any {
    if (this.color == "red") {
      return {
        color: "red"
      }
    } else if (this.color == "green") {
      return {
        color: "green"
      }
    } else if (this.color == "yellow") {
      return {
        color: "yellow"
      }
    } else if (this.color == "white") {
      return { color: "white" }
    } else {
      return {
        color: "violet"
      }
    }
  }
}
