# Use a Debian-based OpenJDK runtime as a parent image
FROM openjdk:17-slim

# Install Maven in the container
RUN apt-get update && apt-get install -y maven

# Set the working directory in the container
WORKDIR /app

# Copy the entire project directory into the container
COPY . /app

# Build the project to create the jar file
RUN mvn clean package -DskipTests

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables for database configuration
# ENV SPRING_DATASOURCE_URL=jdbc:mysql://${DB_HOST}:${DB_PORT}/${DB_NAME}
# ENV SPRING_DATASOURCE_USERNAME=${DB_USERNAME}
# ENV SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD}

# Specify the command to run on container start
CMD ["java", "-jar", "target/hospital.jar"]
