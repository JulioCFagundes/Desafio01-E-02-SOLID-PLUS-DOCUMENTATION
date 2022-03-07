import { User } from "../model/User";

interface ICreateUserDTO {
    name: string;
    email: string;
}

interface IUsersRepository {
    create({ name, email }: ICreateUserDTO): void;
    findById(id: string): User | undefined;
    findByEmail(email: string): User | undefined;
    turnAdmin(user: User): void;
    list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
