import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email } = request.body;
        this.createUserUseCase.execute({ email, name });
        return response.status(201).send();
    }
}

export { CreateUserController };
