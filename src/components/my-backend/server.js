// create server
const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  // postgres confifuration
  const pgp = require('pg-promise')(); 
  const db = pgp({
    connectionString: 'postgres://postgres:postgres@173.184.187.182:5432/postgres'
  });

  