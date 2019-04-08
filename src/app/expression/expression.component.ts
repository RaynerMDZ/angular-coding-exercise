import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  expressions = [
    this.addition(),
    this.subtract(),
    this.foo(),
    this.doSomethingComplicated()
  ];

  public x: number;
  public y: number;
  public z: number;
  public add = false;
  public sub = false;
  public fooBool = false;
  public complicated = false;
  public addDrop = false;
  public subDrop = false;
  public fooBoolDrop = false;
  public complicatedDrop = false;

  constructor() { }

  ngOnInit() {
  }


  public addition(): void {

    // if (this.x != null || this.y != null) {
    //   return this.x + this.y;
    // }
    this.add = true;
    this.sub = false;
    this.fooBool = false;
    this.complicated = false;
  }

  public subtract(): void {

    // if (this.x != null || this.y != null) {
    //   return this.x - this.y;
    // }
    this.add = false;
    this.sub = true;
    this.fooBool = false;
    this.complicated = false;
  }

  public foo(): void {
    // const x = this.x;
    // const y = this.y;
    // const z = this.z;
    //
    // if (x != null || y != null || z != null) {
    //   const result = (-1 * y + Math.sqrt(Math.pow(y, 2) - (4 * x * z))) / (2 * x);
    //   const result2 = (-1 * y - Math.sqrt(Math.pow(y, 2) - (4 * x * z))) / (2 * x);
    //   return result + '<br>' + result2;
    // }
    this.add = false;
    this.sub = false;
    this.fooBool = true;
    this.complicated = false;
  }

  public doSomethingComplicated(): void {
    // if (this.x != null) {
    //   return this.x * this.x;
    // }
    //
    // return null;
    this.add = false;
    this.sub = false;
    this.fooBool = false;
    this.complicated = true;
  }

}
