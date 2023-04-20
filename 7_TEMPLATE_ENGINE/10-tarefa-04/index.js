const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const carros = [
    {
        id: 0,
        marca: 'Fiat',
        modelo: 'Mobi',
        valor: '54.699,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/01/Mobi_Like_2021_11.jpg'
    },
    {
        id: 1,
        marca: 'Renault',
        modelo: 'Kwid',
        valor: '55.799,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/01/Renault-Kwid-Zen-e1661273591469.jpg'
    },
    {
        id: 2,
        marca: 'Citroen',
        modelo: 'C3',
        valor: '58.999,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/08/Citroen-C3.jpg'
    },
    {
        id: 3,
        marca: 'Fiat',
        modelo: 'Cronos',
        valor: '64.499,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/01/Cronos.jpg?resize=1024,576'
    },
    {
        id: 4,
        marca: 'Fiat',
        modelo: 'Argo',
        valor: '65.199,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/01/Argo.jpg?resize=1024,576'
    },
    {
        id: 5,
        marca: 'Volkswagen',
        modelo: 'Gol',
        valor: ' 65.839,99',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/01/Gol-2018_edited-990x594-1.jpg'
    },
]

carros.map((carro) => {
    app.get(`/${carro.marca}-${carro.modelo}`, (req, res) => {
        res.render('carro', {carro})
    })
})

app.get('/', (req, res) => {
    
    res.render('home', {carros})
})

app.listen(port, () => {
    console.log(`Servidor rodando...`);
}) 