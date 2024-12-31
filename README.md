# k6-docker

## Description

This project exposes an API to execute predefined K6 test cases located in the `scripts` folder. Using this API, you can run load tests on your infrastructure in a simple way.

## Requirements

Before you begin, make sure you have the following programs installed on your machine:

- **Docker**: For creating and managing containers.
- **Docker Compose**: For orchestrating multiple Docker containers.
- **k6**: For running the load tests, although it will run inside a container.

## Getting Started

To start the containers and the application, follow these steps:

1. **Run the `docker-start.bat` file**:
   The `docker-start.bat` file will execute the necessary commands to bring up the containers and run the tests. Double-click the file or run it from the terminal.

   - The file performs the following steps:
     - Removes unused resources (containers, images, volumes, etc.) with the command:  
       `docker system prune -af`
     - Stops and removes orphaned containers, volumes, and networks:  
       `docker-compose down --volumes --remove-orphans`
     - Rebuilds the Docker images and starts the containers:  
       `docker-compose up --build`

2. **Access the API**:
   Once the containers are up and running, the API will be available at `http://localhost:8081`. You can access the following endpoints to interact with the API:

   - **/status**: Check the status of the API.
   - **/run-test-1**: Run the first K6 test script (located in `scripts/script1.js`).

   Example of how to run a test:
   - Open your browser or use a tool like [Postman](https://www.postman.com/).
   - Send a GET request to `http://localhost:8081/run-test-1` to execute the test.

## File Structure

- `docker-compose.yml`: Defines the Docker services (API and K6).
- `Dockerfile`: Configures the container for the API.
- `scripts/`: Folder containing K6 test scripts.
- `docker-start.bat`: Script to run Docker commands and bring up the containers.

## Notes

- Make sure Docker and Docker Compose are correctly installed and configured on your machine for smooth execution.
- The `docker-start.bat` file is designed for Windows systems. If you are working on another operating system, you will need to adapt the process to your environment.

## Contributing

If you'd like to contribute to this project, please fork the repository and open a pull request with your improvements.

## License

This project is licensed under the [MIT License](LICENSE).
