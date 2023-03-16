import UserAxiosImpl from "../adapters/UserAxiosImpl";
import { UserPresenterImpl } from "../adapters/UserPresenterImpl";
import type { User, UserView } from "../domain/types";
import type { UserPresenter } from "../domain/UserPresenter";
import type { UserRepository } from "../domain/UserRepository";

export default class GetAllUsersUsecase {
    constructor(
        private userService: UserRepository,
        private userPresenter: UserPresenter
    ) {}
    
    static build() {
        return new GetAllUsersUsecase(
            new UserAxiosImpl(),
            new UserPresenterImpl()
            )
    }

    public async execute(): Promise<UserView[]> {
        const response = await this.userService.fetchAllUsers();
        return response.map((user) => {
            return this.userPresenter.presentUser(user);
        });
    }
}