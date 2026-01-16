package com.bank.account.service;

import com.bank.account.entity.Account;
import java.util.List;

public interface AccountService {
    Account create(Account account);
    List<Account> getAll();
    Account getById(Long id);
    Account update(Long id, Account account);
    void delete(Long id);
}
