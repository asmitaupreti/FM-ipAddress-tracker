# IP Address Tracker

The IP Address Tracker is a dynamic web application built with React that allows users to get detailed information about an IP address or domain. Leveraging the Geo.ipify API, it provides data such as location, timezone, and ISP. The application is styled with Tailwind CSS for a modern and responsive design. For quality assurance, Vitest and the React Testing Library are used for unit testing, while Cypress is utilized for end-to-end testing. This project also includes a GitHub Actions workflow for continuous integration and deployment (CI/CD).

## Features

- **IP Address Lookup**: Enter an IP address or domain to retrieve detailed information.
- **Responsive Design**: Crafted with Tailwind CSS for a seamless experience across all devices.
- **Automated Testing**: Ensures reliability and stability through unit and end-to-end tests.
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions for efficient workflows.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Geo.ipify**: An IP geolocation API for obtaining IP address information.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vitest & React Testing Library**: Tools for efficient unit testing in React applications.
- **Cypress**: An end-to-end testing framework for web applications.
- **GitHub Actions**: Automates workflows for continuous integration and deployment.

## Getting Started

### Prerequisites

- Node.js (v18)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ip-address-tracker.git
```

2. Navigate to the project directory:
 ```bash
cd ip-address-tracker
```

3. Install dependencies:
```bash
npm ci
```
4. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000.

## CI/CD Pipeline

This project uses a GitHub Actions workflow for continuous integration and deployment. The CI/CD pipeline is triggered on push events to the main branch, running tests, and deploying the application to Netlify upon successful completion.

### Workflow Steps

- **Test**: Runs unit and end-to-end tests.
- **Deploy to Netlify**: Deploys the application to Netlify if tests pass.

Refer to the `.github/workflows/*.yml` file for detailed workflow configuration.
