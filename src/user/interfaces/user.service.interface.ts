import { UserResponse } from "../../model/auth.model";
import {
  GetAllUserResponse,
  GetUserResponse,
  ListQueryRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  UserResponseAll,
} from "../../model/user.model";
export abstract class IUserService {
  abstract updateUser(
    me: string,
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;
  abstract getUserById(id: number): Promise<GetUserResponse>;
  abstract getAllUser(
    req: ListQueryRequest,
  ): Promise<GetAllUserResponse<UserResponseAll>>;
}
