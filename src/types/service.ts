export interface APIResult<TData> {
  data: TData;
  success: boolean;
}

export interface APIError {
  success: false;
  message: string;
}
