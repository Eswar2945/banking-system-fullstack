package com.bank.employee.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import com.bank.employee.entity.Employee;
import com.bank.employee.service.EmployeeService;
@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @PostMapping
    public Employee create(@Valid @RequestBody Employee employee) {
        System.out.println("CREATE EMPLOYEE: " + employee);
        return service.create(employee);
    }
    
    @PostMapping("/login")
    public Employee login(@RequestBody Employee employee) {
        System.out.println("EMPLOYEE LOGIN: " + employee.getEmail());
        return service.login(employee.getEmail(), employee.getPassword());
    }


    @GetMapping
    public List<Employee> getAll() {
        System.out.println("FETCH ALL EMPLOYEES");
        return service.getAll();
    }
    
    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id,
                           @Valid @RequestBody Employee employee) {
    	System.out.println("Employee Details Updated: "+id);
        return service.update(id, employee);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        System.out.println("DELETE EMPLOYEE ID: " + id);
        service.delete(id);
        return "Employee deleted";
    }
}
