import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import {newsRoutes} from './routes/newsRoutes';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.static('images'));
app.use(bodyparser.json({ limit: '200mb' }));
app.use(bodyparser.urlencoded({ limit: '200mb',  extended: true, parameterLimit: 1000000 }));
app.use(bodyparser.json());


app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome To yara API' });
});

app.use('/',newsRoutes);

app.listen(port, () => console.log(`Server started on ${port}`));

module.exports = app;