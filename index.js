// import required modules
const express = require('express')

// create an express application
const app = express()

// storing port in variable
const port = 5000

// define a route handler for the root path
app.get('/', (request, response) => {
    response.send('welcome to my home page')

})

app.post('/submit', (request, response) => {
    response.send('received post request')
})

app.get('/about', (request, response) => {
    response.send('welcome to my about page')

})

app.get('/contact', (request, response) => {
    response.send('welcome to my contact page')

})


// start the server,  to start the server you have to listen to a port and it always comes last
app.listen(port, () => {
    console.log(`server started successfully`)
})