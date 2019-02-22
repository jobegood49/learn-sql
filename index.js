require('dotenv').config()
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 8000

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'mytasks',
  },
})

app.get('/users', async (req, res) => {
  console.log('getting all the users')
  res.send({
    message: 'list of all users',
    user: await knex.select().from('users'),
  })
})

app.get('/', (req, res) => {
  res.send({
    message: 'hello',
  })
})

app.listen(port)

// Example using mysql
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: process.env.DB_PWD,
//   database: 'mytasks',
// })

// db.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//     return
//   }

//   console.log('connected as id ' + db.threadId)
// })

// app.get('/users', (req, res) => {
//   let sql = 'SELECT * FROM users'
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err
//     console.log(results)
//   })
// })
