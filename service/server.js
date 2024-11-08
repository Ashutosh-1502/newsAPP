import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config({path: './.env'});
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT ||
	4000;

// console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION,
	{
		autoIndex: true
	})
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log("Connection Failed",
		err));


app.use('/api', authRoute);
app.use('/api/user', userRoute);

app.get('*',
	(req,
	 res) => {
		console.log("Endpoint does not exist");
		res.status(404)
			.send('Endpoint does not exist');
	})

app.listen(PORT,
	() => console.log(`Server started on port ${PORT}`));
