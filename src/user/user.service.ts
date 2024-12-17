import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.Dto';

@Injectable()
export class UserService {

    remove(username: number): void | PromiseLike<void> {
        console.log("remove "+username)
    }
    findOneByUsername(username: string): any {
        console.log("findOneByUsername "+username)
    }
    findByFullName(substring: string): any {
        console.log("findOneByUsername "+substring)
    }
    create(user: UserDTO): any {
        console.log("create "+user)
    }
    addUser(myObj: UserDTO): any {
        console.log("addUser "+myObj)
    }
}
