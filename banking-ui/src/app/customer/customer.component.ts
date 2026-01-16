import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../service/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
{FormsModule}
{CommonModule}
@Component({
  selector:'app-customer',
  standalone:true,
  templateUrl:'./customer.component.html',
  styleUrls:['./customer.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CustomerComponent implements OnInit{
  list:Customer[]=[];
  model:Customer={name:'',email:'',password:'',phone:''};

  constructor(private s:CustomerService){}
  ngOnInit(){this.load();}
  load(){this.s.getAll().subscribe(r=>this.list=r);}
  save(){this.s.create(this.model).subscribe(()=>{this.model={name:'',email:'',password:'',phone:''};this.load();});}
}
