# Allocine Demo

This is a demo application for Allocine, a movie and series information platform. The application is built using React, Redux, and Axios for API interactions. It is deployed on Vercel and can be accessed at the following link:

[**Live Demo**](https://allocine-demo.vercel.app)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Running Tests](#running-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/aminelmaroufi/allocine-demo.git
```

2. Navigate to the project directory:

```sh
cd allocine-demo
```

3. Install the dependencies:

```sh
npm install
```

## Running the Application

To start the development server, run:

```sh
npm start
```

This will start the application on `http://localhost:3000`.

## Building the Application

To build the application for production, run:

```sh
npm run build
```

This will create a `build` directory with the production-ready application.

## Running Tests

To run the unit tests, use the following command:

```sh
npm run test
```

## Running End-to-End Tests

To run the end-to-end tests, use the following command:

```sh
npm run e2e
```

## Environment Variables

Make sure to set the following environment variables in your `src/config.js` file:

- `API_KEY`: Your TMDb API key.

Example `src/config.js` file:

```javascript
export const baseURL = "https://api.themoviedb.org/3";
export const apiKey = "your-tmdb-api-key";
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Allocine Demo! If you have any questions or need further assistance, please feel free to reach out.
