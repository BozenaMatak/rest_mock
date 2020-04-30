import express from 'express';
import cors from 'cors';
import data from './store';

const app = express()   //instanciranje aplikacije 
const port = 3000  // port na kojem će web server slušati

app.use(cors()) // omogući CORS na svim rutama
app.use(express.json())


//unos jednog posta
app.post('/posts', (reg, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/posts/1234');
    res.send();
});

//dohvaćanje svih postova
app.get ('/posts', (req , res) => {
    res.json(data.posts)
});


//primjer unosa (izmjena) nekog podatka o postovima
app.patch('/posts/:id_posta', (req, res) => {
    let data = req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/posts/1234');
    res.send();
});

//brisanje jednog posta
app.delete('/posts/:id_posta',(req , res) =>{
    res.statusCode = 204;
    res.setHeader('Location', '/posts/1234');
    res.send();
});

//unos komentara za određeni post
app.post('/posts/:id_posta/komentar', (req , res) =>{
    res.statusCode = 201;
    res.setHeader('Location', '/posts/1234/komentar');
    res.send();
});

//dohvaćanje posta s njegovim komentarima
app.get('/posts/:id_posta/komentar', (req , res) =>{  //ova mi ruta ne funkcionira
    res.json(data.komentar)
})

//dohvaćanje jednog poslodavca za prikaz njegovih podataka
app.get('/poslodavci/:id_poslodavca', (req , res) =>{
    res.json(data.jedan_poslodavac)
})

//unos jednog poslodavca
app.post('/poslodavci', (req , res) =>{
    res.statusCode = 201;
    res.setHeader('Location', '/poslodavci/234567');
    res.send();
});

//primjer unosa/izmjene podataka o poslodavcu
app.put('/poslodavci/:id_poslodavca', (req, res) => {
    let data = req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/poslodavci/234567');
    res.send();
});

//dohvaćanje jednog freelancera za prikaz njegovih podataka
app.get('/freelanceri/:id_freelancera', (req , res) =>{
    res.json(data.jedan_freelancer)
});

//unos jednog freelancera
app.post('/freelanceri', (req , res) =>{
    res.statusCode = 201;
    res.setHeader('Location', '/freelanceri/345678');
    res.send();
});

//primjer unosa (izmjena) podataka o freelanceru
app.put('/freelanceri/:id_freelancera', (req, res) => {
    let data = req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/freelanceri/345678');
    res.send();
});



app.listen(port, () => console.log(`Slušam na portu ${port}!`))
