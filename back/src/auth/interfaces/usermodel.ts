import { UserCreation } from "./usercreation";

export interface UserModel extends UserCreation{
    id: number;
    createdAt: Date;
    updatedAt: Date;
}