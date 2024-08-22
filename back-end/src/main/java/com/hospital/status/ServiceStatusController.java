package com.hospital.status;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

@RestController
@RequestMapping("/")
public class ServiceStatusController {
    
    @GetExchange
    public String getServiceStatus() {
        return "Service is running";
    }

}