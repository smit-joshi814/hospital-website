package com.hospital.config;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class DataSourceConfig {

	private final Logger logger = LoggerFactory.getLogger(DataSourceConfig.class);

	@Value("${spring.datasource.url:}")
	private final String url = env("SPRING_DATASOURCE_URL");
	@Value("${spring.datasource.username:}")
	private final String username = env("SPRING_DATASOURCE_USERNAME");
	@Value("${spring.datasource.password:}")
	private final String password = env("SPRING_DATASOURCE_PASSWORD");

	private static String env(String name) {
		return System.getenv(name);
	}

	@Bean
	DataSource dataSource() {
		logger.info("datasource url: ", url);
		logger.info("username: ", username);
		logger.info("pasword: ", password);
		return DataSourceBuilder.create().url(url).username(username).password(password).build();
	}
}