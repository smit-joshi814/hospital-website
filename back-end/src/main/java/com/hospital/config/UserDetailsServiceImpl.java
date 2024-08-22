package com.hospital.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.hospital.user.Users;
import com.hospital.user.UserService;

public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userService.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("Invalid Email Or Password");
        }

        return new AuthUserDetails(user);
    }
}