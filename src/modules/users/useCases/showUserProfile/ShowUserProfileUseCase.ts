import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ShowUserProfileUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        console.log(user_id);
        const user = this.usersRepository.findById(user_id);
        console.log(user);
        if (user === undefined) {
            throw new Error("Selecione um usuário válido");
        }
        return user;
    }
}

export { ShowUserProfileUseCase };
