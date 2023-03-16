import type { User, UserView } from "./types";

export interface UserPresenter {
    presentUser(user: User): UserView;
}