import { User } from "./user";

export interface AuthResponse{
  ok: boolean;
  accessToken: string;
  user: User;
}
