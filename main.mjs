// console.log('Hello world');


// import express from 'express';

// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello world Server</h1>");
// })

// app.get('/profile', (req, res)=>{
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello World server</h1>");v
// } )




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from 'express';
import open from 'open';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(`
        <html>
            <body>
                <h1>Hello World Server</h1>
                <button onclick="openBrowser()">Open Browser</button>

                <script>
                    function openBrowser() {
                        window.open('http://localhost:${port}/profile');
                    }
                </script>
            </body>
        </html>
    `);
});

app.get('/profile', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(`
        <html>
            <body>
                <h1>Hello World Server</h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    open(`http://localhost:${port}`);
});


