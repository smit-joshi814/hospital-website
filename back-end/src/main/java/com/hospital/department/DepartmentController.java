package com.hospital.department;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin(origins = "*")
public class DepartmentController {

	@Autowired
	private DepartmentService service;

	@GetMapping
	public ResponseEntity<List<Department>> getDepartments() {
		return ResponseEntity.ok(service.getDepartments());
	}

	@PostMapping
	public ResponseEntity<Department> addDepartment(@RequestBody Department department) {
		return ResponseEntity.ok(service.addDepartment(department));
	}

	@PutMapping("{id}")
	public ResponseEntity<Department> updateDepartment(@PathVariable Integer id,@RequestBody Department department) {
		return ResponseEntity.ok(service.updateDepartment(department));
	}

	@DeleteMapping("{id}")
	public void deleteDepartment(@PathVariable Integer id) {
		service.removeDepartment(id);
	}

}
