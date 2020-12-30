import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://pranjali-admin:pranjali@cluster0.hlgup.mongodb.net/eduDB";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

app.use('/posts', postRoutes);