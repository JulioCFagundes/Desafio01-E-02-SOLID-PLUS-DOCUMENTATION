import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const list = this.usersRepository.list();
        const user1 = list.find((user) => user_id === user.id);
        console.log(user1);
        if (user1 === undefined) {
            throw new Error("Selecione um usuário válido");
        } else if (user1.admin === false) {
            throw new Error("Somente admin");
        }
        return list;
    }
}

export { ListAllUsersUseCase };
