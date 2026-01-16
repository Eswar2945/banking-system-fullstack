import { Component, OnInit } from '@angular/core';
import { LoanService, Loan } from '../service/loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-loan',
  standalone:true,
  templateUrl:'./loan.component.html',
  styleUrls:['./loan.component.css'],
  imports:[CommonModule, FormsModule]
})
export class LoanComponent implements OnInit{
  list:Loan[]=[];
  model:Loan={customerId:0,accountId:0,loanAmount:0,interestRate:0,tenureMonths:0};

  constructor(private s:LoanService){}
  ngOnInit(){this.load();}
  load(){this.s.getAll().subscribe(r=>this.list=r);}
  save(){this.s.create(this.model).subscribe(()=>{this.model={customerId:0,accountId:0,loanAmount:0,interestRate:0,tenureMonths:0};this.load();});}
}
