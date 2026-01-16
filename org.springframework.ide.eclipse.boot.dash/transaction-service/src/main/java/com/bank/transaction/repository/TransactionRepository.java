package com.bank.transaction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bank.transaction.entity.Transaction;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByTransactionDateTimeBetween(
        LocalDateTime from,
        LocalDateTime to
    );
}
