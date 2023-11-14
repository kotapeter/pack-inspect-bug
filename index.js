const express = require('express')

const server = express()

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`Example app1 listening at http://localhost:${port}`)
})
