package com.hospital.appointment;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository repository;

	public List<Appointment> getAppointments() {
		return repository.findAll();
	}

	public Appointment addAppointment(Appointment appointment) {
		return repository.save(appointment);
	}

	public Appointment updateAppointment(Appointment appointment) {
		Optional<Appointment> app = repository.findById(appointment.getId());
		app.ifPresent(t -> t.setStatus(appointment.getStatus()));
		return repository.save(app.get());
	}

	public void deleteAppointment(Integer appointment) {
		repository.deleteById(appointment);
	}
}
