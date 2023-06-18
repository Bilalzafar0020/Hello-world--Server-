console.log('Hello world');


import express from 'express';

const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello world Server</h1>");
})

app.get('/profile', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello World server</h1>");v
} )




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



