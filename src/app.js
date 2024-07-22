import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import router from './routes/sendEmail.js'
import { config } from 'dotenv'

config()

const app = express()

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