package com.hospital.doctor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DoctorService {
	@Autowired
	private DoctorRepository repository;

	@Transactional(readOnly = true)
	public List<Doctor> getDoctors() {
		return repository.findAll();
	}

	@Transactional
	public Doctor addDoctor(Doctor doctor) {
		return repository.save(doctor);
	}

	@Transactional
	public Doctor updateDoctor(Doctor doctor) {
		Optional<Doctor> doc = repository.findById(doctor.getId());
		doc.ifPresent(t -> t.setName(doctor.getName()));
		return repository.save(doc.get());
	}

	@Transactional
	public void deleteDoctor(Integer id) {
		repository.deleteById(id);
	}
}
