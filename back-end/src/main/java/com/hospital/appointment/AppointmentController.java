package com.hospital.appointment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

	@Autowired
	private AppointmentService service;

	@GetMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<Appointment>> getAppointments() {
		return ResponseEntity.ok(service.getAppointments());
	}

	@PostMapping
	public ResponseEntity<Appointment> addAppointment(@RequestBody Appointment appointment) {
		return ResponseEntity.ok(service.addAppointment(appointment));
	}

	@PutMapping("{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable Integer id,
			@RequestBody Appointment appointment) {
		return ResponseEntity.ok(service.updateAppointment(appointment));
	}

	@DeleteMapping("{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteAppointment(@PathVariable Integer id) {
		service.deleteAppointment(id);
	}
}
