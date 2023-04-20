const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Teste',
        comments: 4
    },
    {
      title: 'Aprender PHP',
        category: 'PHP',
        body: 'Teste',
        comments: 4
    },
    {
      title: 'Aprender Python',
        category: 'Python',
        body: 'Teste',
        comments: 4
    },
  ]

  res.render('blog', {posts})
})

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