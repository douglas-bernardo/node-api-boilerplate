import User from '@modules/user/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export default ListUsersService;
