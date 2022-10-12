import User from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
  findAll(): Promise<User[]>;
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
