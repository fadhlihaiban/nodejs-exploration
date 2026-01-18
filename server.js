require('dotenv').config(); // Panggil dotenv paling atas
console.log("DB User:", process.env.DB_USER);

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); //Agar bisa baca data JSON dari React

//1. Koneksi ke MySQL (mirip mysqli_connect)
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

const port = process.env.PORT || 8081;

//2. Route ambil data (mirip select di PHP)
app.get('/users', (req, res) => {
	db.query("SELECT * FROM users", (err, result) => {
		res.json(result);
	});
});

//3. Route tambah data (mirip insert di PHP)
app.post('/users', (req, res) => {
	const { nama, email } = req.body;
	db.query("INSERT INTO users (nama, email) VALUES (?, ?)", [nama, email], (err, result) => {
		res.json({ message: "Databerhasil masuk!" });
	});
});

app.listen(port, () => console.log(`Server Backend Jalan di Port ${port}`));