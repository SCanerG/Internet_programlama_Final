const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

const mongoose= require('mongoose')
const bodyParser= require('body-parser')

mongoose.connect('mongodb://127.0.0.1/ScgDB01',{
useNewUrlParser:true,
useUnifiedTopology:true

})



app.use(express.static('public'))

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const main=require('./routes/main')
app.use('/',main)


app.listen(port, hostname,()=>{

    console.log('Çalıştı,http://127.0.0.1:3000/')
    
})