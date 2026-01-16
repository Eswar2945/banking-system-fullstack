package com.bank.transaction.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

import com.bank.transaction.entity.Transaction;
import com.bank.transaction.service.TransactionService;

@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping
    public Transaction create(@Valid @RequestBody Transaction transaction) {
        System.out.println("TRANSACTION RECEIVED: " + transaction);
        return service.create(transaction);
    }

    @GetMapping
    public List<Transaction> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Transaction getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/between")
    public List<Transaction> byDateRange(
        @RequestParam("from") String from,
        @RequestParam("to") String to
    ) {
        LocalDateTime fromDate = LocalDateTime.parse(from);
        LocalDateTime toDate = LocalDateTime.parse(to);
        return service.getByDateRange(fromDate, toDate);
    }
}
