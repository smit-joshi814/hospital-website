package com.hospital.doctor;

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
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "*")
public class DoctorController {
	@Autowired
	private DoctorService service;

	@GetMapping
	ResponseEntity<List<Doctor>> getDoctors() {
		return ResponseEntity.ok(service.getDoctors());
	}

	@PostMapping
	ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
		return ResponseEntity.ok(service.addDoctor(doctor));
	}

	@PutMapping("{id}")
	ResponseEntity<Doctor> updateDoctor(@PathVariable Integer id, @RequestBody Doctor doctor) {
		return ResponseEntity.ok(service.updateDoctor(doctor));
	}

	@DeleteMapping("{id}")
	void deleteDoctor(@PathVariable Integer id) {
		service.deleteDoctor(id);
	}
}
