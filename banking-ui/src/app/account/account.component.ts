import { Component, OnInit } from '@angular/core';
import { AccountService, Account } from '../service/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
{FormsModule}
{CommonModule}
@Component({
  selector: 'app-account',
  standalone:true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports:[CommonModule, FormsModule]
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];
  account: Account = {
    accountNumber: '',
    accountType: '',
    balance: 0,
    customerId: 0
  };

  constructor(private service: AccountService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(res => this.accounts = res);
  }

  save() {
    this.service.create(this.account).subscribe(() => {
      this.account = { accountNumber:'', accountType:'', balance:0, customerId:0 };
      this.load();
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
