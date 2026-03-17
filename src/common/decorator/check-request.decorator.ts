import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CheckRequest = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    const queryParam = req.query;
    return queryParam;
  },
);

//
//     // Query params
//     const query = req.query;           // Semua query params
//     const specific = req.query.name;   // Query param spesifik
//
//     // Route params (:id)
//     const params = req.params;
// …
