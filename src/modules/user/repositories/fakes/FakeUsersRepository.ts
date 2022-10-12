import { v4 as uuid } from 'uuid';

import IUsersRepository from '@modules/user/repositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

import User from '@modules/user/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const indexUser = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[indexUser] = user;

    return user;
  }
}

export default FakeUsersRepository;
