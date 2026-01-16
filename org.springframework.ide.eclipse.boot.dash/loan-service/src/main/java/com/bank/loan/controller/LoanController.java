package com.bank.loan.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import com.bank.loan.entity.Loan;
import com.bank.loan.service.LoanService;
@RestController
@RequestMapping("/loans")
@CrossOrigin(origins = "http://localhost:4200")
public class LoanController {

    private final LoanService service;

    public LoanController(LoanService service) {
        this.service = service;
    }

    @PostMapping
    public Loan create(@Valid @RequestBody Loan loan) {
        System.out.println("APPLY LOAN: " + loan);
        return service.create(loan);
    }

    @GetMapping
    public List<Loan> getAll() {
        System.out.println("FETCH ALL LOANS");
        return service.getAll();
    }
}
