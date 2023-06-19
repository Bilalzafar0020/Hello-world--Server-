import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001; // process.env.PORT  SO THAT IT COULD SET THE PORT ACCORDING TO AVAILABE DEVICE

app.get('/', (req, res) => {
  // res.sent('hello world' + new Date())
  res.set('Content-Type', 'text/html'); // to send the http reponce in html format 
  res.status(200).send(`
    <html>
      <head>
        <style>
          body {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .animation-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .animation-text {
            color: #ff4081;
            font-size: 32px;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            animation: typing 1s linear forwards;
            margin-bottom: 20px;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          .button-container {
            text-align: center;
          }

          .button {
            background-color: blue;
            border: none;
            border-radius: 5px;
            outline: none;
            padding: 10px 20px;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.2s;
          }

          .button:hover {
            transform: scale(1.1);
          }
        </style>
      </head>
      <body>
        <div class="animation-container">
          <div class="animation-text">Welcome to my Server</div>
          <div class="button-container">
            <button class="button" onclick="openBrowser()">Open Another Server</button>
          </div>
        </div>
        
        <script>
          function openBrowser() {
            window.open('https://frail-snaps-clam.cyclic.app/profile');
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
      <head>
        <style>
          body {
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .text {
            color: white;
            font-size: 32px;
          }
        </style>
      </head>
      <body>
        <div class="text">Welcome to my Another Server</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`); // The port acts as a gateway for network communication between the server and clients.
});





// import express from 'express';

// let app1 = express();

// let port1 = 3002;

// app1.get('/', (req,res)=>{
//   res.sent('Hello World' + new Date())
// } );


// app1.listen(port1, ()=>{
//   console.log(`Example app listening on Port ${port1}`);
// })


