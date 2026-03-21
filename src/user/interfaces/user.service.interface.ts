import {
  GetUserResponse,
  ListQuery,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../model/user.model";
export abstract class IUserService {
  abstract changeUsername(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;

  abstract changeEmail(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  abstract getUserById(id: number): Promise<GetUserResponse>;
  abstract getAllUser(req: ListQuery);
}
