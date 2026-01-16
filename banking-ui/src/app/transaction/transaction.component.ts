import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../service/transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-transaction',
  standalone:true,
  templateUrl:'./transaction.component.html',
  styleUrls:['./transaction.component.css'],
  imports:[CommonModule, FormsModule]
})
export class TransactionComponent implements OnInit{
  list:Transaction[]=[];
  model:Transaction={fromAccount:'',toAccount:'',amount:0,type:''};

  constructor(private s:TransactionService){}
  ngOnInit(){this.load();}
  load(){this.s.getAll().subscribe(r=>this.list=r);}
  save(){this.s.create(this.model).subscribe(()=>{this.model={fromAccount:'',toAccount:'',amount:0,type:''};this.load();});}
}
