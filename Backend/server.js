import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import apiRouter from './routes/apiRouter.js';


dotenv.config();

const app = express();
const port = 3001
const conn_uri = process.env.MONGO_URI

app.use(cors());
app.use(express.json());


app.use('/api', apiRouter);

function startServer() {
	mongoose.connect(conn_uri)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(port, () => {
			console.log(`Server running on http://localhost:${port}`)
		})
	})
	.catch((err) => {
		console.log('Connection Failed!');
		console.log(err);
	})

}

startServer();
