import 'reflect-metadata';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ListUsersService from './ListUsersService';

let fakeUserRepository: FakeUsersRepository;
let listUsersService: ListUsersService;

describe('ListUsersService', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    listUsersService = new ListUsersService(fakeUserRepository);
  });

  it('should be able to list users', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123123',
    });

    const user2 = await fakeUserRepository.create({
      name: 'John Trê',
      email: 'johntre@email.com',
      password: '123123',
    });

    const users = await listUsersService.execute();

    expect(users).toEqual([user1, user2]);
  });
});
