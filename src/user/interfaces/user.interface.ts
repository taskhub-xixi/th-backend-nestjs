import {
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../model/user.model";

export abstract class IUserRepository {
  abstract changeEmail(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  abstract changeUsername(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;
  abstract getAllUser();
  abstract getUserById(request): Promise<GetUserResponse>;
}
