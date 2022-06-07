const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const hostname = '127.0.0.1';
const port = 3024;
const DBPATH = "banco_dados.db"
app.use(express.static("../front/"));
app.get('/curso', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre
    var sql = 'SELECT * FROM cursos'; //comando p SQL
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});