export class WebResponse<T> {
  data?: T;
  error?: string;
  paging?: Paging;
  statusCode?: number;
  message?: string;
}

export class Paging {
  total_page?: number;
  current_page?: number;
  page_size?: number;
  total_item?: number;
}
