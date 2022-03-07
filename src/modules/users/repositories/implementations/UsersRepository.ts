/* eslint-disable no-param-reassign */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): void {
        const user = new User();
        Object.assign(user, {
            name,
            email,
            admin: false,
            created_at: new Date(),
            updated_at: new Date(),
        });
        this.users.push(user);
        console.log(user);
    }

    findById(id: string): User {
        const user = this.users.find((user) => user.id === id);

        return user;
    }

    findByEmail(email: string): User {
        const user = this.users.find((user) => user.email === email);

        return user;
    }

    turnAdmin(receivedUser: User): void {
        receivedUser.admin = true;
        receivedUser.updated_at = new Date();
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };
