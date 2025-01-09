<div align="center">
  <a href="https://github.com/stevenlara-ravn/ravn-final-challenge">
    <img src="./src/assets/icons/logomark.svg" alt="Logo" width="100" height="100"> 
  </a>
</div>

# Ravn Task Manager

## Introduction

Ravn Task Manager is a task management application designed to help users efficiently create, update, and delete tasks. The app provides advanced filtering options to sort tasks by status, due date, task name, tags, estimated points, and assignee. It features an intuitive and elegant user experience powered by modern web technologies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Contributors](#contributors)
- [License](#license)

## Features

- **Task Management System**: Seamlessly create, update, and delete tasks.
- **Optimistic UI**: Instantaneous updates for a responsive user experience.
- **Filtering and Sorting**: Filter tasks by various attributes, including:
  - Status
  - Due Date
  - Task Name
  - Tags
  - Estimated Points
  - Assignee
- **Functional Search Bar**: Quickly search for tasks with a powerful search feature.
- **Drag-and-Drop Sorting**: Rearrange tasks effortlessly using a modern drag-and-drop interface.
- **Different View Modes**: Choose between a **grid view** and a **list view** for a more intuitive experience.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/stevenlara-ravn/ravn-final-challenge
   cd ravn-final-challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Alternatively, you can use `pnpm` or `yarn`:

   ```bash
   pnpm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Add the following variables to your `.env` file:
     ```
     VITE_GRAPHQL_RAVN_API=<your-graphql-api-endpoint>
     VITE_GRAPHQL_RAVN_API_KEY=<your-graphql-api-key>
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Alternatively, you can run `npm run build` to build the project and `npm run preview` to preview the production build.

## Dependencies

Ravn Task Manager is built with the following technologies:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![dnd-kit](https://img.shields.io/badge/dnd--kit-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Apollo Client](https://img.shields.io/badge/Apollo_Client-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## Application Screenshots

<img src="./public/assets/img/screenshots/screenshot-1.avif" alt="screenshot-1" width="350">
<img src="./public/assets/img/screenshots/screenshot-2.avif" alt="screenshot-2" width="350">

## Application Architecture

This application is built using a vanilla React frontend and a GraphQL API. The frontend is powered by the Apollo Client, which allows for efficient data fetching and management. The reason for doing it without any UI frameworks is to showcase the power of Apollo Client and its ability to handle complex data fetching scenarios, as well as to provide a more streamlined development experience without the need for additional libraries that may not be necessary for a simple task management application, since it is a SPA (Single-Page Application) and not a full-fledged web application.

### The application architecture is as follows:

<img src="./public/assets/diagrams/architecture-diagram.svg" alt="Architecture Diagram">

## Contributors

[![Contributors](https://contrib.rocks/image?repo=stevenlara-ravn/ravn-final-challenge)](https://github.com/stevenlara-ravn/ravn-final-challenge/graphs/contributors)

We welcome contributions to Ravn Task Manager! Here’s how you can get started:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push them to your fork.
4. Submit a pull request to the main repository.

Thank you for helping make Ravn Task Manager even better!

## License

This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#top">back to top</a>)</p>
