import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack_10@cluster0-mxcyy.mongodb.net/devRadar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(routes);

app.listen(3333);
