import { User } from "src/app/auth/interfaces/user";

export interface Post {
  id: number;
  title: string;
  message: string;
  createdAt: Date;
  author: User;
}
