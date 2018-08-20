const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'dist')

const authRoutes = require('./routes/authRoutes')

app.use(bodyParser.json());
app.use(express.static(publicPath))

app.use('/auth', authRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}` ))