import { Injectable } from '@nestjs/common';
import { WarehouseDTO } from 'src/warehouse/warehouse.dto';
@Injectable()
export class AuthService {
    signUp(myobj: WarehouseDTO): any {
        console.log(myobj)
    }

}
