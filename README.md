## Motus Game
## README for Node.js and React project using MySQL

This project is a Node.js backend with an React front-end, which uses MySQL as the database. Below are the steps to install and run the project.

### Prerequisites
- Node.js version 12.x or higher installed
- React version 18.x or higher installed
- MySQL installed and running on your machine

### Installation
1. Clone this repository.
2. Open the terminal and navigate to the project directory.
3. For the backend, run the following command to install dependencies:
    ```
    npm install
    ```
4. For the frontend, navigate to the frontend directory and run the following command to install dependencies:
    ```
    npm install
    ```
5. Create a new MySQL database and update the configuration in backend/config/db.config.js file.

### Running the project
- To start the backend server, run the following command:
    ```
    nodemon index.js
    ```
- To start the frontend server, navigate to the frontend directory and run the following command:
    ```
    npm start
    ```
- Once both servers are running, open your browser and navigate to http://localhost:3000 to access the application.

### Database configuration
The database configuration can be found in the backend/config/Database.js file. Update the file with your MySQL database credentials.
```
    const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 ```
- First parameter or 'DB' is the database name.
- second parameter or `USER` is the database user name.
- third parameter or `PASSWORD` is the database password.
- `HOST` is the database host name.
- `dialect` is the type of SQL dialect used by the database (in this case, MySQL).

That's it! If you have any questions or issues, please feel free to contact us.
