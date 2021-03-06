import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const userIdAlreadyExists = this.usersRepository.findById(user_id);
        if (!userIdAlreadyExists) {
            throw new Error("Mensagem do erro");
        }
        return this.usersRepository.turnAdmin(userIdAlreadyExists);
    }
}

export { TurnUserAdminUseCase };
