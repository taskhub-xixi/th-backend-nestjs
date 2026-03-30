import { UserResponse } from "../../model/auth.model";
import {
  GetAllUserResponse,
  GetUserById,
  GetUserResponse,
  RequestQuery,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from "../../model/user.model";

export abstract class IUserRepository {
  abstract updateUser(
    me: User,
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;
  abstract getAllUser(
    req?: RequestQuery,
  ): Promise<GetAllUserResponse<UserResponse>>;
  abstract getUserById(request: GetUserById): Promise<GetUserResponse>;
}
