package com.hospital.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.hospital.config.JwtHelper;
import com.hospital.user.Users;
import com.hospital.user.UserService;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private UserService userService;

    public AuthResponse varify(AuthRequest authRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));
        if (authentication.isAuthenticated()) {
            String token = jwtHelper.generateToken(authRequest.email());
            return new AuthResponse(token, jwtHelper.getExpirationDateFromToken(token));
        }
        return null;
    }

    public AuthResponse registerUser(RegistrationRequest regRequest) {
        userService.registerUser(Users.builder().email(regRequest.email()).password(regRequest.password()).build());
        String token = jwtHelper.generateToken(regRequest.email());
        return new AuthResponse(token, jwtHelper.getExpirationDateFromToken(token));
    }
}
