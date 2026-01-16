package com.bank.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bank.loan.entity.Loan;

public interface LoanRepository extends JpaRepository<Loan, Long> {}

