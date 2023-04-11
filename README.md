# ECommerceApp

This is an e-commerce application built using Node.js, Express, Mongoose, Jwt, uuid on the backend, and Angular, Bootstrap, Bootstrap validation, Validation directive, and Generic HTTP Client on the frontend.

## Features

- User authentication with JWT
- Product catalog and browsing
- Shopping cart management
- Checkout and payment processing

## Requirements

- Node.js version 14 or higher
- MongoDB instance

## Getting started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Navigate to `http://localhost:5000` in your web browser

## Development

To run the application in development mode, use the following command:
```npm run dev ```

This will start the server with nodemon, which will automatically restart the server whenever changes are made to the code.

## Deployment

To deploy the application, you will need to set up a production MongoDB instance and set the `MONGODB_URI` environment variable to the connection string for that instance.

You can then start the server in production mode with the following command:
```npm run start:prod```


## Contributing

Contributions are welcome! Please open an issue or pull request to suggest changes or report bugs.

## License

This project is licensed under the MIT License.
