const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// db connection
const db = require('./configs/db.config');

// Route Handling
const indexRouter = require('./routes/index');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');
const chartRouter = require('./routes/chart');

// Middlewares

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));
app.use('/chart', chartRouter(db));

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
