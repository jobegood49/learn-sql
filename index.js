require('dotenv').config()
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 8000

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PWD,
  database: 'mytasks',
})

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }

  console.log('connected as id ' + db.threadId)
})

app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM users'
  let query = db.query(sql, (err, results) => {
    if (err) throw err
    console.log(results)
  })
})

// db.end();

// db.query('SELECT * FROM users', function(error, results, fields) {
//   // When done with the db, release it.
//   console.log(results)

//   console.log('************')
//   // Handle error after the release.
//   if (error) throw error

//   // Don't use the db here, it has been returned to the pool.
// })

// db.end(() => {
//   console.log('end')
// })

app.get('/users', (req, res) => {
  res.send({
    message: 'hello',
  })
})

app.listen(port)
