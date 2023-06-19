

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



















// import express from 'express';
// import open from 'open';

// const app = express();
// const port = 3004;

// app.get('/', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.status(200).send(`
//         <html>
//             <body>
//             <head>
//                 <style>
//                     body {
//                         background-color: black;
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                         height: 100vh;
//                         margin: 0;
//                     }

//                     button {
//                         background-color: blue;
//                         border: none;
//                         border-radius: 0;
//                         outline: none;
//                         padding: 10px 20px;
//                         color: white;
//                         font-size: 18px;
//                         cursor: pointer;
//                         transition: transform 0.2s;
//                     }

//                     button:hover {
//                         transform: scale(1.1);
//                     }
//                 </style>
//             </head>
//                 <h1>Click on the Button to open server </h1>
//                 <button onclick="openBrowser()">Open Browser</button>

//                 <script>
//                     function openBrowser() {
//                         window.open('http://localhost:${port}/profile');
//                     }
//                 </script>
//             </body>
//         </html>
//     `);
// });

// app.get('/profile', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.status(200).send(`
//         <html>
//         <head>
//         <style>
//         h1{
//             Color : blue;
//             font-size: 20px;
//         }
//         </head>
//             <body>
//                 <h1>Hello World Server</h1>
//             </body>
//         </html>
//     `);
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     open(`http://localhost:${port}`);
// });




