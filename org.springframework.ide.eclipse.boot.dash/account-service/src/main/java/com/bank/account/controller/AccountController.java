package com.bank.account.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import com.bank.account.entity.Account;
import com.bank.account.service.AccountService;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

	private final AccountService service;

	public AccountController(AccountService service) {
		this.service = service;
	}

	@PostMapping
	public Account create(@Valid @RequestBody Account account) {
		System.out.println("CREATE ACCOUNT: " + account);
		return service.create(account);
	}

	@GetMapping
	public List<Account> getAll() {
		System.out.println("FETCH ALL ACCOUNTS");
		return service.getAll();
	}

	@PutMapping("/{id}")
	public Account update(@PathVariable Long id, @Valid @RequestBody Account account) {
		System.out.println("UPDATE ACCOUNT ID: " + id);
		return service.update(id, account);
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		System.out.println("DELETE ACCOUNT ID: " + id);
		service.delete(id);
		return "Account deleted";
	}
}
