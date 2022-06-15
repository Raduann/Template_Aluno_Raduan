const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const hostname = '127.0.0.1';
const port = 3024;

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
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

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "INSERT INTO cursos (nome, instituicao, duracao) VALUES ('" + req.body.nome + "', '" + req.body.instituicao + "','" + req.body.duracao + "')";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "UPDATE cursos SET nome = '" + req.body.nome + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});
// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "DELETE FROM cursos WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  