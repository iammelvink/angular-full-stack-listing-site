import mysql from 'mysql';

// create connection
let connection;

export const db = {
  connect: () => {
    // db configs
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    connection.connect();
  },

  // Converting sql query into a promise
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({
          results,
          fields
        });
      })
    }),
  // Close connection to db
  end: () => connection.end(),
}