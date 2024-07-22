import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import router from './routes/sendEmail.js'
import { config } from 'dotenv'

config()

const app = express()

const whitelist = ['*'];

app.use((req, res, next) => {
	const origin = req.get('referer');
	const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));

	if (isWhitelisted) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
		res.setHeader('Access-Control-Allow-Credentials', true);
	}

	if (req.method === 'OPTIONS') res.sendStatus(200);
	else next();
});

const setContext = (req, res, next) => {
	if (!req.context) req.context = {};
	next();
};

app.use(setContext);


// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use('/api/sendEmail', router)
app.use('/', (req, res) => {
	res
		.status(200)
		.json({ message: "Email sent" })
})

// Start the server
const port = process.env.PORT || 3000

app.listen(port)
console.log(`Server is running on port ${port}`)