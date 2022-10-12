import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToPlain } from 'class-transformer';

import CreateUserService from '@modules/user/services/CreateUserService';
import ListUsersService from '@modules/user/services/ListUsersService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUsersService);

    const users = await listUserService.execute();

    return response.json(instanceToPlain(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(instanceToPlain(user));
  }
}
