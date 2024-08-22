package com.hospital.inquiries;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InquiryService {

	@Autowired
	private InquiryRepository repository;

	@Transactional(readOnly = true)
	public List<Inquiry> getInquiries() {
		return repository.findAll();
	}

	@Transactional
	public Inquiry addInquiry(Inquiry inquiry) {
		return repository.save(inquiry);
	}
	
	@Transactional
	public Inquiry updateInquiry(Inquiry inquiry) {
		Optional<Inquiry> inq = repository.findById(inquiry.getId());
		inq.ifPresent(t -> t.setStatus(inquiry.getStatus()));
		return repository.save(inq.get());
	}
	
	@Transactional
	public void deleteInquiry(Integer id) {
		repository.deleteById(id);
	}
}
