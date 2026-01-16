package com.bank.employee.service;

import org.springframework.stereotype.Service;
import com.bank.employee.repository.EmployeeRepository;
import com.bank.employee.entity.Employee;
import com.bank.employee.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeServiceImpl(EmployeeRepository repo) {
        this.repo = repo;
    }

    public Employee create(Employee employee) {
        return repo.save(employee);
    }

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Employee getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found with id " + id));
    }
    @Override
    public Employee login(String email, String password) {
        return repo.findByEmailAndPassword(email, password)
            .orElseThrow(() -> new RuntimeException("Invalid employee credentials"));
    }


    public Employee update(Long id, Employee employee) {
        Employee existing = getById(id);
        existing.setName(employee.getName());
        existing.setRole(employee.getRole());
        existing.setSalary(employee.getSalary());
        return repo.save(existing);
    }

    public void delete(Long id) {
        getById(id);
        repo.deleteById(id);
    }
}
