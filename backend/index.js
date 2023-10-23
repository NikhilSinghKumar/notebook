const connectToMongo = require('./db');
var cors = require('cors')

connectToMongo();
const express = require('express')
const app = express()
const port = 5000

// Middleware to send request
app.use(cors())
app.use(express.json())




// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebok backend listening on port ${port}`)
})