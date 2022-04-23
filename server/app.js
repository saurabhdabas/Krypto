const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const logger = require('morgan');
const cors = require('cors');
// db connection

const db = require('./configs/db.config');

// Route Handling
const indexRouter = require('./routes/index');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');
const chartRouter = require('./routes/chart');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));
app.use('/chart', chartRouter(db));

//Add User Authentication
app.put('/user-data',(req, res) => {
  let data = {
    email:req.body.data.email,
    password:req.body.data.password
  };

  db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [data.email,data.password])
    .then(response => res.send(response.rows[0]))
    .catch(e => console.error(e.stack));
});




//used to insert into watchlist
app.put('/insert-watchlist',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`INSERT INTO watchlists (user_email, crypto_id, image, user_email_cyrpto_id)
  VALUES ($1, $2, $3, $4) RETURNING *;`, [req.body.user.email, req.body.id, req.body.img,`${req.body.user.email}${req.body.id}`])
    .then((res) => res.send(res))
    .catch((error) => res.send(error));
});

//used to delete from watchlist
app.put('/user-delete',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`DELETE FROM watchlists WHERE user_email = $1 and crypto_id = $2;`, [req.body.user.email,req.body.data])
    .then((res) => res.send(res))
    .catch((error) => res.send(error));
});



//used to retrive all the favs from the watchlist database
app.put('/watchlist',(req, res) => {
  let response = req.body.user.email;
  console.log("this is the response: " , response);
  db.query(`select crypto_id, image FROM watchlists where user_email = $1`, [response])
    .then(response => res.send(response.rows))
    .catch((error) => res.send(error));
});



// Socket Connection 
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3002',
    method: ['GET', 'POST']
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

module.exports = {app, server};
