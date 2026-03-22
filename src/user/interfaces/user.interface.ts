import {
  GetUserResponse,
  ListQueryRequest,
  RequestQuery,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../model/user.model";

export abstract class IUserRepository {
  abstract updateUser(
    me,
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse>;
  abstract getAllUser(req?: RequestQuery);
  abstract getUserById(request): Promise<GetUserResponse>;
}
