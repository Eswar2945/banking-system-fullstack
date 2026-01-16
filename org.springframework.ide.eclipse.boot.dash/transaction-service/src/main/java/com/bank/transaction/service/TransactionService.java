package com.bank.transaction.service;

import com.bank.transaction.entity.Transaction;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionService {

    Transaction create(Transaction transaction);

    List<Transaction> getAll();

    Transaction getById(Long id);

    List<Transaction> getByDateRange(
        LocalDateTime from,
        LocalDateTime to
    );
}
