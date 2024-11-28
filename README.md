# Random Ideas App

Random Ideas is a full-stack application for sharing and managing random ideas.

The application allows users to create, share, and manage random ideas in real-time. Built with Node.js and MongoDB on the backend, and vanilla JavaScript with Webpack on the frontend, it demonstrates modern full-stack development practices and responsive design principles. Users can post their ideas, view others' contributions, and manage their own posts through a clean, intuitive interface.

![Random Ideas](/public/Screenshot%202024-11-28%20130805.png)

[Visit Live Demo](https://random-ideas-app-qcno.onrender.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Authors](#authors)
- [Feedback](#feedback)

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/randomideas-app.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB(or other DB host) credentials along with desired server PORT:

```bash
PORT=your-desired-server-port
Mongo_URI=your-db-uri
```

## Usage

To run the dev servers:

```bash
npm run dev

# seperate terminal
cd client
npm run dev
```

To build the project, run webpack:

```bash
cd client
npm run build
```

## Technologies Used

- **Node.js**: Backend runtime environment
- **Nodemon**: Backend Hot-Reload package
- **Express**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Webpack**: Module bundler for assets and scripts
- **JavaScript (ES6+)**: Core programming language using modern features

## Features

- **Authentication**: Users have their own names linked to their ideas.
- **Share random ideas**: Create Random Ideas and Post them on the wall to share with others.
- **Responsive Server updates**: View new Ideas from other creators.
- **Idea Management**: Update and Delete your contributions.
- **Responsive Design**: Using tags and clean UI ideas are dynamically added and optimized for both desktop and mobile devices.

## Project Structure

```plaintext
/randomideas-app
├── client/                 # Frontend application files
│   ├── src/               # Source files
│   │   ├── components/    # UI components
│   │   ├── services/      # API services
│   │   └── styles/        # CSS styles
│   ├── webpack.config.js  # Webpack configuration
│   └── package.json       # Frontend dependencies
├── models/                # Database models
├── routes/                # API routes
├── config/               # Configuration files
├── .env                  # Environment variables
├── server.js             # Main server file
└── package.json          # Backend dependencies
```

## Environment Variables

To run this project, you will need to add the following variables to a .env file.

- `PORT`: Your desired server port
- `Mongo_URI`: Your DB URI string

## Scripts

- `npm run build:client`: cd to client directory & run npm run build on Webpack.
- `npm run start`: Start the node server.
- `npm run dev`: Start the Node server with nodemon and watch Server.js file
- `cd client npm run dev`: Serve the front-end with Webpack on development mode.
- `cd client npm run build`: Build the front-end with Webpack ready for production.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
