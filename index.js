// Først bruker vi 'require' for å referere til Express-biblioteket
//  (som ligger i node_modules):
const express = require('express');

// Deretter lager vi en ny instans av Express:
const app = express();

app.use(express.json());
// Først refererer vi til driveren (som ligger i node_modules)
const { Pool } = require('pg');

// Så lager vi en forbindelse til databasen
const pool = new Pool({
    user: 'postgres',
    password: 'mysecretpassword',
    host: 'localhost',
    port: 5432,
});

// Vi setter opp en enkel "rute" (route) som svarer på
// forespørsler til rotkatalogen, /:
app.get('/', (req, res) => {
    res.send('Hello, world! Klokken er ' + new Date().toLocaleTimeString());
});



app.get('/her', (req, res) => {
    res.send(`
        <h1>Her er en overskrift</h1>
        <p>Og her er en paragraf</p>
    `);
});

// DELTAGERE
app.post('/deltagere', async (req, res) => {
    const data = req.body;
    console.log('Lagrer deltager: ', data)
    const query = 'INSERT INTO users (name) VALUES ($1)';
    const values = [data.name];
    await pool.query(query, values);
    console.log('Lagret deltager: ', data)
    res.send('Data lagret');
});

app.get('/deltagere-1', (req, res) => {
    res.send(`
        <ul>
            <li>daniel</li>
            <li>daniel</li>
            <li>benjamin</li>
            <li>benjamin</li>
        </ul>
    `);
});

app.get('/deltagere-2', async (req, res) => {
    // Henter data fra databasen:
    const result = await pool.query('SELECT * FROM users');

    // Starter en html-liste:
    let html = "<h1>Deltagere</h1>"
    html += "<ul>"

    // Legger til en <li> for hver rad i databasen:
    for (const row of result.rows) {
        html += "</li><li>" + row.name + "</li>"
    }

    // Avslutter html-listen og returnerer resultatet:
    html += "</ul>"
    res.send(html);
});

app.get('/deltagere-json', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
});

// BILMERKER
app.get('/bilmerker', async (req, res) => {
    // Henter data fra databasen:
    const result = await pool.query('SELECT * FROM bilmerker');

    // Starter en html-liste:
    let html = "<h1>Bilmerker</h1>"
    html += "<ul>"

    // Legger til en <li> for hver rad i databasen:
    for (const row of result.rows) {
        html += "</li><li>" + row.merke + "</li>"
    }

    // Avslutter html-listen og returnerer resultatet:
    html += "</ul>"
    res.send(html);
});

app.get('/bilmerker-json', async (req, res) => {
    const result = await pool.query('SELECT * FROM bilmerker');
    res.json(result.rows);
});

// SKUESPILLERE
app.get('/skuespillere-json', async (req, res) => {
    const result = await pool.query('SELECT * FROM skuespillere');
    res.json(result.rows);
});

app.post('/skuespillere', async (req, res) => {
    const data = req.body;
    console.log('Lagrer skuespiller: ', data)
    const query = 'INSERT INTO skuespillere (navn) VALUES ($1)';
    const values = [data.navn];
    await pool.query(query, values);
    console.log('Lagret skuespiller: ', data)
    res.send('Data lagret');
});

// SKUESPILLERE OG FILMER
app.get('/skuespillere-og-filmer', async (req, res) => {

    const query = `
        SELECT 
        s.navn AS skuespiller,
        f.tittel AS film
        FROM 
        skuespillere s
        JOIN 
        skuespiller_i_film sif ON s.id = sif.skuespiller_id
        JOIN 
        filmer f ON f.id = sif.film_id
        ORDER BY 
        s.navn, f.id;
        `;
    const { rows } = await pool.query(query);

    // Bygg HTML
    let html = `<h1>Liste over skuespillere og filmer</h1>`;
    html += '<ul>'

    rows.forEach(row => {
        html += `<li>${row.skuespiller} – ${row.film}</li>`;
    });

    html += `</ul>`;
    res.send(html);
});

app.get('/skuespillere-og-filmer-json', async (req, res) => {
    const query = `
        SELECT 
        s.navn AS skuespiller,
        f.tittel AS film
        FROM 
        skuespillere s
        JOIN 
        skuespiller_i_film sif ON s.id = sif.skuespiller_id
        JOIN 
        filmer f ON f.id = sif.film_id
        ORDER BY 
        s.navn, f.id;
        `;

    const result = await pool.query(query);
    res.json(result.rows);
});

// PUBLIC
app.use(express.static('public'));

// Så starter vi serveren, som nå lytter på port 3000:
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});