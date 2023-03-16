import type { User } from "./types";

export interface UserRepository {
    fetchAllUsers(): Promise<User[]>;
}