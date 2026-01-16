package com.bank.transaction.service;

import org.springframework.stereotype.Service;
import com.bank.transaction.repository.TransactionRepository;
import com.bank.transaction.entity.Transaction;
import com.bank.transaction.exception.ResourceNotFoundException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository repo;

    public TransactionServiceImpl(TransactionRepository repo) {
        this.repo = repo;
    }

    @Override
    public Transaction create(Transaction transaction) {
        transaction.setTransactionDateTime(LocalDateTime.now());
        transaction.setStatus("SUCCESS");
        return repo.save(transaction);
    }

    @Override
    public List<Transaction> getAll() {
        return repo.findAll();
    }

    @Override
    public Transaction getById(Long id) {
        return repo.findById(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Transaction not found with id " + id)
            );
    }

    @Override
    public List<Transaction> getByDateRange(LocalDateTime from, LocalDateTime to) {
        return repo.findByTransactionDateTimeBetween(from, to);
    }
}
