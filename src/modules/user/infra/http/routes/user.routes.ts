import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', userController.index);
usersRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

export default usersRouter;
