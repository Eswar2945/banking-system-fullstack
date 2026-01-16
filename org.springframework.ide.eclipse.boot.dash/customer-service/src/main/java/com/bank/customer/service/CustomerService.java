package com.bank.customer.service;

import com.bank.customer.entity.Customer;
import java.util.List;

public interface CustomerService {
    Customer create(Customer customer);
    List<Customer> getAll();
    Customer getById(Long id);
    Customer update(Long id, Customer customer);
    void delete(Long id);
}
