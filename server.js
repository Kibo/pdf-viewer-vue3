const express = require('express')
const app = express()
const port = 3000
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile('demo/viewer.html', {root: __dirname })
})

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`)
})
