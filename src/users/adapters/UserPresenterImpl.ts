import { UserView, type User } from "../domain/types";
import type { UserPresenter } from "../domain/UserPresenter";

export class UserPresenterImpl implements UserPresenter{
    presentUser(user: User): UserView {
        return new UserView(user.id, user.name);
    }

}