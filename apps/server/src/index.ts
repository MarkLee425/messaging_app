import { logger } from '@repo/logger';
import { createServer } from './server';

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
