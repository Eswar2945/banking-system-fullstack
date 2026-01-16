package com.bank.loan.service;

import com.bank.loan.entity.Loan;
import java.util.List;

public interface LoanService {
    Loan create(Loan loan);
    List<Loan> getAll();
    Loan getById(Long id);
    Loan update(Long id, Loan loan);
    void delete(Long id);
}
