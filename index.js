console.log('sqlite')
require('dotenv').config()
const express = require('express')
const sqlite = require('sqlite')

const app = express()
const port = process.env.PORT || 8000
const dbPromise = sqlite.open(process.env.DB_PATH, { Promise })

app.get('/users', async (req, res) => {
  const db = await dbPromise
  const users = await db.all('SELECT * FROM users')
  if (users) {
    res.send({
      users: users,
    })
  }
})

app.get('/users/:id', async (req, res) => {
  const db = await dbPromise
  const user = await db.all('SELECT * FROM users WHERE id = ?', req.params.id)
  if (user) {
    res.send({
      user: user,
    })
  }
})

app.listen(port)
