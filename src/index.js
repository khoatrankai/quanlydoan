const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const route = require('./routes')
const app = express()
const port = 3000
const db = require('./config/db')

db.connect();



app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}))
  app.use(express.json())
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
})); 
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources\\views'))
// console.log(path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))


//ROUTE
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
// })tening on port ${port}`)
// })tening on port ${port}`)
})