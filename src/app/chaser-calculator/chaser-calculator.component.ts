import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaser-calculator',
  templateUrl: './chaser-calculator.component.html',
  styleUrls: ['./chaser-calculator.component.css']
})
export class ChaserCalculatorComponent implements OnInit {

  title: string = 'Chaser Crystals Calculator';
  currentLevel: number;
  targetLevel: number;
  materials: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.materials = 0;
    let i = this.currentLevel ? this.currentLevel : 0;
    let sum = 0;
    
    for (i; i < this.targetLevel; i++) {
      if (i < 5) {
        sum = 40;
      } else if (i < 10) {
        sum = 76;
      } else if (i < 15) {
        sum = 144; //TODO: I need to get the actual value
      } else if (i < 20) {
        sum = 238;
      } else if (i < 25) {
        sum = 364;
      }
      
      this.materials += sum;
    }
  }
}
