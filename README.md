# Simple E-commerce Application with Next.js and PostgreSQL

This is a simple e-commerce application built with Next.js and PostgreSQL. It is a full-stack application that uses Next.js for the frontend and PostgreSQL for the database. It is a simple application that allows users to add products to their cart and checkout.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nemo0/ecommerce-nextjs)

## About the Template

This NextJS template includes a bunch of tools for a smoother build process. It is also set up with TypeScript for better type-checking. It enforces the Google style guide. The template includes the following tools,

- Chakra UI
- Tailwind CSS
- ESLint
- ESLint Config Google
- Prettier
- Husky
  This template can help you quickly start a side project without thinking about the setup.

## Getting Started

Clone or fork the project and install the required dependencies by running the following command,

```bash
npm install
```

This will install the required dependencies.

To run the project in development mode, run the command `npm run dev`.

This template consists of _nine_ scripts. Each for a specific reason.

- `dev`: Will run the dev server
- `build`: Will build the project
- `start`: Will start the server
- `check-types`: Will perform type-checking
- `check-format`: Will run prettier check
- `check-lint`: Will check linting with ESLint
- `format`: Will format the project with Prettier
- `test-all`: Will run `check-format`, `check-lint`, `check-types` and `build`
- `prepare`: Will prepare husky
