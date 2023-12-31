import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './api';

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('hello world!');
});

app.listen(process.env.SERVER_PORT || 8000, () => {
  console.log('listening on port ' + process.env.SERVER_PORT);
});
