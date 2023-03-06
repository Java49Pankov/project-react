import { LoginData } from '../model/LoginData'
export class AuthService {
    private users: LoginData[] = [
        { username: "user@gmail.com", password: "user1234" },
        { username: "admin@gmail.com", password: "admin1234" }
    ];

    login(loginData: LoginData): void {
        const userIndex = this.users.findIndex(user => user.username === loginData.username && user.password === loginData.password);
        if (userIndex === -1) {
            throw "User not found"
        }
    }

}