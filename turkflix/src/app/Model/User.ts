import { Role } from "./Role";

export class User{
    idUser?:number;
    password?:String;
    lastName?:String;
    firstName?:String;
    username?:String;
    roles?:Array<Role>;

    
}