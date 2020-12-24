import mysql from 'mysql';

// mysql db configs
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hapi-server',
  password: '',
  database: 'listing-site'
})

export const db = {
  connect: () => connection.connect(),

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