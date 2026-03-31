import {
  GetAllUserResponse,
  GetUserResponse,
  ListQueryRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../model/user.model";
export abstract class IUserService {
  abstract updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  abstract getUserById(id: string): Promise<GetUserResponse>;
  abstract getAllUser(req: ListQueryRequest): Promise<GetAllUserResponse>;
}
