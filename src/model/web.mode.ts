export class WebResponse<T> {
  data?: T;
  error?: string;
  paging?: Paging;
  statusCode?: number;
  message?: string;
}

export class Paging {
  size?: number;
  total_page?: number;
  current_page?: number;
}
