package com.hospital.auth;

public record RegistrationRequest(String name, String email, String password, String phone) {

}
