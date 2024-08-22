package com.hospital.inquiries;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquiryService {

	@Autowired
	private InquiryRepository repository;

	public List<Inquiry> getInquiries() {
		return repository.findAll();
	}

	public Inquiry addInquiry(Inquiry inquiry) {
		return repository.save(inquiry);
	}
	
	public Inquiry updateInquiry(Inquiry inquiry) {
		Optional<Inquiry> inq = repository.findById(inquiry.getId());
		inq.ifPresent(t -> t.setStatus(inquiry.getStatus()));
		return repository.save(inq.get());
	}
	
	public void deleteInquiry(Integer id) {
		repository.deleteById(id);
	}
}
