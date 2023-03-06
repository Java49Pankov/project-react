
import { LoginData } from "../model/LoginData";

export class AuthService {
    private users: LoginData[] = [
        { userName: "user@gmail.com", password: "user1234" },
        { userName: "admin@gmail.com", password: "admin1234" }
    ];
    login(LoginData: LoginData) {
        //TODO
        //throws exception in the case mismatching a given LoginData with 
        //array of users (field users)
    }
}