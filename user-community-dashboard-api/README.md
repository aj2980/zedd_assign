# User Community Dashboard API

## Overview
This project is a simple User & Community Dashboard API built with Node.js and Express. It simulates backend functionality for a frontend dashboard, providing endpoints to manage users and communities.

## Features
- In-memory storage for users and communities.
- RESTful API endpoints for user and community management.
- Basic error handling and input validation.
- Utility function to find common members between communities.

## Project Structure
```
user-community-dashboard-api
├── src
│   ├── index.js               # Entry point of the application
│   ├── routes
│   │   ├── users.js           # User-related routes
│   │   └── communities.js      # Community-related routes
│   ├── utils
│   │   └── findCommonMembers.js # Utility function for finding common members
│   └── data
│       └── mockData.js        # In-memory mock data for users and communities
├── tests
│   ├── findCommonMembers.test.js # Tests for the findCommonMembers utility
│   └── users.test.js          # Tests for user-related API endpoints
├── package.json                # NPM configuration file
├── .gitignore                  # Files and directories to ignore by Git
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd user-community-dashboard-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Project
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:4000`. You can access the root endpoint at `/` to verify that the server is running successfully.

### Running Tests
To run the tests, use the following command:
```
npm test
```
This will execute all the test cases defined in the project.

## Time Taken
Total time taken to complete the project: [Insert time here]