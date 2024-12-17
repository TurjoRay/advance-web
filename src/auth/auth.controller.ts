import { Body, Controller, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as bcrypt from 'bcrypt';
import { WarehouseDTO } from 'src/warehouse/warehouse.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
       
    @Post('register')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: WarehouseDTO): Promise<WarehouseDTO> {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(myobj.password, salt);
        myobj.password = hashedpassword;
        return this.authService.signUp(myobj);
    }
  
}
function diskStorage(arg0: { destination: string; filename: (req: any, file: any, cb: any) => void; }): any {
    throw new Error('Function not implemented.');
}

