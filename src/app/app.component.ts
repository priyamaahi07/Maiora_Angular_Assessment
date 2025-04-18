import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { SliderModule } from 'primeng/slider'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Maiora_Angular_Assessment';

  loanAmount: number = 14500000;
  loanPeriod: number = 6;
  monthlyInstallments: number = 0;

  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    // this._router.navigate(['a']);
    // this.monthlyEmi();
  }

  monthlyEmi() {
    const interestRate = 0.02;
    const totalAmount = this.loanAmount + (this.loanAmount * interestRate);
    this.monthlyInstallments = Math.round(totalAmount / this.loanPeriod);
  }

  applyLoan() {
    console.log('Loan Amount:', this.loanAmount);
    console.log('Loan Period:', this.loanPeriod);
    console.log('Monthly Installments:', this.monthlyInstallments);
  }
}
