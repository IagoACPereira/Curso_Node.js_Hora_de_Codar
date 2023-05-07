const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

const conn = require("./db/conn");
const Task = require("./models/Task");
const tasksRoutes = require('./routes/tasksRoutes')

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use('/tasks', tasksRoutes)

//app.listen(port)

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
