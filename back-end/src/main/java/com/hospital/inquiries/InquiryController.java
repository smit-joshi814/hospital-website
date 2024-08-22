package com.hospital.inquiries;

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
@RequestMapping("/api/inquiries")
public class InquiryController {

	@Autowired
	private InquiryService service;

	@GetMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<Inquiry>> getInquiries() {
		return ResponseEntity.ok(service.getInquiries());
	}

	@PostMapping
	public ResponseEntity<Inquiry> addInquiry(@RequestBody Inquiry inquiry) {
		return ResponseEntity.ok(service.addInquiry(inquiry));
	}

	@PutMapping("{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Inquiry> updateInquiry(@PathVariable Integer id, @RequestBody Inquiry inquiry) {
		return ResponseEntity.ok(service.updateInquiry(inquiry));
	}

	@DeleteMapping("{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteInquiry(@PathVariable Integer id) {
		service.deleteInquiry(id);
	}
}
