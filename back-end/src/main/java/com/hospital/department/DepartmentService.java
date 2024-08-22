package com.hospital.department;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository repository;
	
	public List<Department> getDepartments(){
		return repository.findAll();
	}
	
	public Department updateDepartment(Department department) {
		Optional<Department>  dept =repository.findById(department.getId());
		dept.ifPresent(t -> t.setName(department.getName()));
		return repository.save(dept.get());
	}
	
	public Department addDepartment(Department department) {
		return repository.save(department);
	}
	
	public void removeDepartment(Integer id) {
		repository.deleteById(id);
	}
}
