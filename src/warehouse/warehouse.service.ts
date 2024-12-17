import { Injectable, ParseIntPipe } from "@nestjs/common";


import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { loginDTO, WarehouseDTO } from "./warehouse.dto";



@Injectable()
export class WarehouseService {
    getWhStaff()  {
       console.log("getWhStaff")
    }
    addAdmin(myobj: WarehouseDTO) {
        console.log(myobj)
    }
    remove(id: number) {
        console.log(id)
    }
    showProfile(username: any) {
        console.log(username)
    }


    async findOne(logindata: loginDTO): Promise<any> {
        console.log(logindata);
    }
   
  
    getNotification(): string {
        return "Welcome to 3rd route service of staff";
    }

 
   
   
    getOrderByNameAndId(name, id): object {
        console.log(id, name);
        return { message: "your id is " + id + " and your name is " + name };
    }
    addPacking(myobj: object): object {
        console.log(myobj);
        return myobj;

    }
    getUsers(): object {
        return { message: "hellow Admin" }
    }
    getUsersById(id: string): object {
        return { message: "You id is " + id };
    }
    getUsersByNameAndId(name: string, id: string): object {
        return {
            message: "You id is " + name +
                " and your id is " + id
        };

    }

  


}