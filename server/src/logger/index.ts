import winston, { format } from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      filename: 'logs/error/error.log',
      level: 'error'
    })
  ]
});
