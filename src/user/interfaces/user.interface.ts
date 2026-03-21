import {
  GetUserResponse,
  ListQuery,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from "../../model/user.model";

export abstract class IUserRepository {
  abstract changeEmail(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  abstract changeUsername(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;
  abstract getAllUser(query: ListQuery, req?: User);
  abstract getUserById(request): Promise<GetUserResponse>;
}
