import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cocktailsRoutes from './routes/cocktails';
import accountRoutes from './routes/account';

dotenv.config();
const { PORT, MONGO_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cocktails', cocktailsRoutes);
app.use('/account', accountRoutes);
// app.use('/mybar', mybarRoutes);

app.use((err, req, res) => {
  res.status(err.status ? err.status : 404).json({ message: err.message, error: err.stack });
});

app.listen(PORT, () => {
  mongoose.connect(MONGO_URL).then(() => {
    console.log(`Ready to service server and db on ${PORT}`);
  });
});
