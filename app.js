const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


app.use(express.static('dist/luba-proverbs/'))

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', (req, res, next) => {
  var options = {
    root: path.join(__dirname, 'dist/luba-proverbs/'),
  }
  var fileName = 'index.html'

  return res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})