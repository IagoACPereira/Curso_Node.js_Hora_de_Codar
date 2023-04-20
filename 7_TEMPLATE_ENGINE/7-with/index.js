const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


app.get("/dashboards", function (req, res) {
    const items = ["Item a", "Item b", "Item c"];
  
    res.render("dashboards", { items: items });
  });

  app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo irá te ajudar a aprender node.js....',
        comments: 4
    }

    res.render('blogpost', {post})
  })

app.get("/", function (req, res) {
  const user = {
    name: "Matheus",
    surname: "Battisti",
  };

  const auth = true

  const approved = true

  res.render("home", { user: user, auth, approved});
});

app.listen(3000);