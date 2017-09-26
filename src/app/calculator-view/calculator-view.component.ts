import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  yearlySalary: number; 
  contributionPercentage: number; 
  cityMatchPercentage: number; 
  total: number; 

  constructor() { }

  ngOnInit() {
  }

  calculateContribution() {
    this.contributionPercentage < 1.5 ? this.cityMatchPercentage = this.contributionPercentage : this.cityMatchPercentage = 1.5; 
    
    let employeeContrib: number = this.yearlySalary * (this.contributionPercentage / 100); 
    let cityContrib: number = this.yearlySalary * (this.cityMatchPercentage / 100); 

    this.total = employeeContrib + cityContrib; 
  }

}
