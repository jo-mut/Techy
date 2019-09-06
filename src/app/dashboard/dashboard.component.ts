import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private randomBinaries: number[] = [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1];
  private randomColor: string[] = ["red", "green", "yellow", "white", "violet"];
  private counts: number = 0;
  private previous: number = 0;
  private current: number = 0;
  public bins: string[] = [];
  public color: string = "";

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < this.randomColor.length; j++) {
        this.choseColor();
      }
      setTimeout(() => {
        this.choseBin();
      }, 5000);
    }

  }

  private choseBin() {
    let random = Math.trunc((Math.random() * 14));
    this.bins.push((this.randomBinaries[random].toString()));
    this.counts += 1;

    if (this.bins.length == this.previous + 9) {
      this.bins.push("\n");
     
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
