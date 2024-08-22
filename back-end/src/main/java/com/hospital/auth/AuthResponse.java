package com.hospital.auth;

import java.util.Date;

public record AuthResponse (String token,Date expiry,String... options) {}