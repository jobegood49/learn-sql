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

app.listen(port)
