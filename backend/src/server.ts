import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { Api, ENV } from './common/enum';
import { mailer } from './routes';

const app: Express = express();

app
    .use(cors({ origin: "*" }))
    .use(express.json());

app.use(Api.BASE, mailer);

app.get(Api.BASE, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(ENV.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV.PORT}`);
});