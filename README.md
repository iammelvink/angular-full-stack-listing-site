# angular-full-stack-listing-site

## Repository for my angular-full-stack-listing-site project

Find out how to build complete full stack listing platform. Author Melvin Kisten tackles CRUD functions and connects the system to a database of MySQL (Relational database). Created a full-stack platform using JavaScript. The frontend was created using Angular and the backend was created using NodeJS, Hapi, MySQL. Then I used Angular services to link my backend with my frontend. I also used Postman to test my end points.

1. Methodologies/Project Management:

   - Agile

2. Coding Practices:

   - OOP (Object Oriented Programming)

3. Programming Languages/Frameworks:
   - TypeScript
   - JavaScript
   - Angular
   - NodeJS
   - Hapi
   - MySQL
   - Postman

## Live Demo (work in progress...)

- [angular-listing-site](https://angular-listing-site.herokuapp.com/ "angular-listing-site")

## Instructions

1. Make sure you have these installed

   - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
      - I used LTS node version 14.15.3 and npm version 6.14.9 at time of creation
   - [MySQL Community Server](https://dev.mysql.com/downloads/mysql/ "MySQL Community Server")
      - I used MySQL Community Server version 8.0.22 at time of creation
   - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/ "MySQL Workbench")
      - I used MySQL Workbench version 8.0.22 at time of creation
      - Import data from "/db-dump/mysql-database-dump.sql"
      - Open MySQL Workbench
      - Login
      - Goto Administration > Users and Privileges > Add Account and apply
      - Goto Schema Privileges
      - Check SELECT, INSERT, UPDATE, DELETE and apply
      - cd "listing-site-backend"
      - cp ".env-example" ".env"
      - Open ".env"
      - Fill in the following
      - DB_USER="" DB_PASS="" will be what you have decided previously

        ```
        DB_USER=""
        DB_PASS=""
        DB_NAME="listing-site"
        DB_HOST="localhost"
        ```

   - [Postman](https://www.postman.com/downloads/ "Postman")
      - I used postman version 7.36.1 at time of creation

2. Clone this repository into your local machine using the terminal (mac) or [Gitbash (PC)](https://git-scm.com/download/win "Gitbash (PC)")

   ```
   > git clone https://github.com/iammelvink/angular-full-stack-listing-site.git
   ```

3. Make sure you have created accounts at

   - [Firebase](https://firebase.google.com "Firebase")
     - Create new Firebase project in Firebase Console
     - Setup Firebase Auth Google Sign
     - Go to Project Settings > General > Firebase SDK snippet
     - Copy contents

        ```
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
        ```

      - To listing-site-frontend/src/environments/environment.ts

        ```
        export const environment = {
            production: false,
            firebase: {
                apiKey: "",
                authDomain: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: "",
                appId: "",
                measurementId: ""
            }
        };
        ```

     - Go to Project Settings > Service Accounts > Firebase Admin SDK
     - Generate a json private key file for Node.js
     - Rename it to "credentials.json"
     - Move "credentials.json" to listing-site-backend
     - KEEP "credentials.json" PRIVATE

4. listing-site-frontend setup (running on port 4200)
   ```
   > cd listing-site-frontend
   ```

   ```
   > npm install
   ```

   Compiles and hot-reloads for development
   ```
   > npm run start
   ```

5. listing-site-backend setup (running on port 8000)
   ```
   > cd listing-site-backend
   ```

   ```
   > npm install
   ```

   Compiles and hot-reloads for development
   ```
   > npm run dev
   ```

6. Enjoy!

## Deploy for production (work in progress...)

1. Make sure you have created accounts at

   - [Firebase](https://firebase.google.com "Firebase")
     - Create new Firebase project in Firebase Console
     - Setup Firebase Auth Google Sign
     - Go to Project Settings > General > Firebase SDK snippet
     - Copy contents

        ```
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
        ```

      - To listing-site-frontend/src/environments/environment.ts

        ```
        export const environment = {
            production: false,
            firebase: {
                apiKey: "",
                authDomain: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: "",
                appId: "",
                measurementId: ""
            }
        };
        ```

     - Go to Project Settings > Service Accounts > Firebase Admin SDK
     - Generate a json private key file for Node.js
     - Rename it to "credentials.json"
     - Move "credentials.json" to listing-site-backend
     - KEEP "credentials.json" PRIVATE
   - [Heroku](https://signup.heroku.com/login "Heroku")

2. Then follow ALL step by step

   ```
   > cd listing-site-frontend
   ```

   Building optimized version of listing-site-frontend

   ```
   > ng build
   ```

   ```
   copy listing-site-frontend/dist to listing-site-backend/
   ```

   ```
   then edit listing-site-backend/src/server.js for live production hosting
   ```

   ```
   > cd listing-site-backend
   ```

   Building optimized version of listing-site-backend

   ```
   > npm run build
   ```

   Needed in production

   Heroku:

   Installing Heroku using npm globally

   ```
   > npm install -g heroku
   ```

   Logging into Heroku

   ```
   > heroku login
   ```

   ```
   > cd listing-site-backend
   ```

   Creating a heroku app

   ```
   > heroku create
   ```

   - Add this to listing-site-backend/package.json in "scripts"

   To start the server

   ```
   "dev": "nodemon --exec babel-node src/server.js",
   ```

   Deployment to Heroku

   - Edit listing-site-backend/package.json
   - Add:

   ```
   "engines": {
      "node": "0.0.0",
      "npm": "0.0.0"
   },
   ```

   - In listing-site-backend/package.json
   - Cut all devDependencies

   ```
   "devDependencies": {

    }
   ```
   Paste all devDependencies in dependencies

   ```
   "dependencies": {

    },
   ```

   ```
   > cd listing-site-backend
   ```

   Create .gitignore file
   Add this

   ONLY in entire file

   ```
   # Dependency directories
   node_modules/
   ```

   OR

   ```
   Remove 'dist', '.env' and 'build' from .gitignore file
   ```

   ```
   > git init
   ```

   ```
   > heroku git:remote -a <app name>
   ```

   ```
   > git add .
   ```

   ```
   > git commit -am "initial commit"
   ```

   ```
   > git push heroku master
   ```

   ```
   > heroku ps:scale web=1
   ```

## More Stuff

Check out some other stuff on [Melvin K](https://github.com/iammelvink "Melvin K GitHub page").
