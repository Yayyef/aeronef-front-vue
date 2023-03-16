import type { User } from "../domain/types";
import type { UserRepository } from "../domain/UserRepository";
import axios, { type AxiosResponse } from 'axios';

export default class UserAxiosImpl implements UserRepository {

    async fetchAllUsers(): Promise<User[]> {
        const response: AxiosResponse = await axios.get('http://localhost:8080/api/user');
        return response.data;
    }

}