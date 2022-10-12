import { container } from 'tsyringe';

import '@modules/user/providers';

import IUsersRepository from '@modules/user/repositories/IUserRepository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);
