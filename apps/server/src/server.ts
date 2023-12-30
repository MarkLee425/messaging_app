import bodyParser from 'body-parser';
import express, { type Express, Request, Response } from 'express';
import cors from 'cors';
import { logger } from '@repo/logger';

export const createServer = (): Express => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors());

  app.get('/', (_req: Request, res: Response) => {
    logger.info('ok');
    return res.status(200).json({
      message: 'ok'
    });
  });
  return app;
};
