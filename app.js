const express = require ('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 8080

app.use(express.static('public'))
app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'public/css'))
//app.use('/js', express.static(__dirname + 'public/js'))
//app.use('/img', express.static(__dirname + 'public/img'))

app.use(expressLayouts)
app.set('view engine', 'ejs')

//navs
app.get('', (reg, res) => {
    res.render('index', {title: 'UniChat: Welcome!'})
})
app.get('/home', (reg, res) => {
    res.render('home', {title: 'Home'})
})
app.get('/about', (reg, res) => {
    res.render('about', {title: 'About Page'})
})
app.get('/chatBot', (reg, res) => {
    res.render('chatbot', {title: 'UniChat'})
})
app.get('/filters', (reg, res) => {
    res.render('filters', {title: 'Settings'})
})

app.listen(port, () => 
    console.info('App is listening on port 8080')
)
