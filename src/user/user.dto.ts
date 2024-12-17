import { IsEmail, IsInt, IsString, MaxLength, maxLength, MinLength } from "class-validator";


export class UserDTO {
    @IsString()
    fullName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    gender: string;
    
    @IsInt()
    phone: number;
}