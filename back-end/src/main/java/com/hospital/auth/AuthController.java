package com.hospital.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody AuthRequest authRequest) {

        AuthResponse authResponse = authenticationService.varify(authRequest);
        return ResponseEntity.ok(authResponse);

    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        AuthResponse authResponse = authenticationService.registerUser(registrationRequest);
        return ResponseEntity.ok(authResponse);
    }

    @GetMapping("/login")
    public ResponseEntity<String> authenticateUser() {
        return new ResponseEntity<>("Login Using Get Request Is Not Supported", HttpStatus.METHOD_NOT_ALLOWED);
    }

}