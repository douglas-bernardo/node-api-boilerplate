import { Router } from 'express';

import usersRouter from '@modules/user/infra/http/routes/user.routes';

const routes = Router();

/**
 * API Routes
 */
routes.use('/users', usersRouter);

export default routes;
