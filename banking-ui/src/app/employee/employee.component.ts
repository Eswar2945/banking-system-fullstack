import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
{FormsModule}
{CommonModule}
@Component({
  selector: 'app-employee',
  standalone:true,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  imports:[CommonModule, FormsModule]
})
export class EmployeeComponent implements OnInit {
  list: Employee[] = [];
  model: Employee = { name:'', email:'', password:'', role:'', salary:0 };

  constructor(private s: EmployeeService) {}
  ngOnInit(){ this.load(); }
  load(){ this.s.getAll().subscribe(r=>this.list=r); }
  save(){ this.s.create(this.model).subscribe(()=>{this.model={name:'',email:'',password:'',role:'',salary:0};this.load();}); }
  del(id:number){ this.s.delete(id).subscribe(()=>this.load()); }
}
