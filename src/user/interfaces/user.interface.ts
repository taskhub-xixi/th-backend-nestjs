import { UserResponse } from "../../model/auth.model";
import {
  GetAllUserResponse,
  GetUserById,
  GetUserResponse,
  ListQueryRequest,
  RequestQuery,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from "../../model/user.model";

export abstract class IUserRepository {
  abstract updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  abstract getAllUser(
    Query: ListQueryRequest,
  ): Promise<GetAllUserResponse<UserResponse>>;
  abstract getUserById(request: GetUserById): Promise<GetUserResponse>;
}
