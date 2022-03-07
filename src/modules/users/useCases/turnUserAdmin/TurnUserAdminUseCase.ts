import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): void {
        const UserExists = this.usersRepository.findById(user_id);
        if (!UserExists) {
            throw new Error("Selecione um usuário válido");
        } else if (UserExists.admin === true) {
            throw new Error("O usuário já é um administrador!");
        }
        this.usersRepository.turnAdmin(UserExists);
    }
}

export { TurnUserAdminUseCase };
