import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import AppError from '@shared/errors/AppError';

import routes from './routes';

/** Connection */
import '@shared/infra/typeorm';

/** Dependence injection manager */
import '@shared/container';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * celebrate errors middleware
 */
app.use(errors());

/**
 * Middleware Global Exception Handler
 */
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
