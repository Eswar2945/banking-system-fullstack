package com.bank.employee.service;

import com.bank.employee.entity.Employee;
import java.util.List;

public interface EmployeeService {
    Employee create(Employee employee);
    List<Employee> getAll();
    Employee getById(Long id);
    Employee login(String email, String password);
    Employee update(Long id, Employee employee);
    void delete(Long id);
}
