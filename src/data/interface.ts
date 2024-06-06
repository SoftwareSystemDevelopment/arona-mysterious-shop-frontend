export type Response<T> = OkResponse<T> | ErrResponse;

interface OkResponse<T> {
  data: T;
  message: "ok";
}

interface ErrResponse {
  data: null;
  message: string;
}

export interface User {
  userId: string;
  userName: string;
  userAccount: string;
  userAvatar: string | null;
  userRole: string;
}

export interface List<T> {
  records: T[];
  total: string;
  size: string;
  current: string;
  pages: string;
}

export interface GoodInfo {
  productId: number;
  productName: string;
  productPrice: number;
  productCategoryName: string;
  stock: number;
  providerId: string;
  productCreateDate: string;
}

export interface Address {
  name: string;
  tel: string;
  address: string;
}

export interface Order {
  orderId: string;
  orderStatus: string;
  shopId: string;
  shopName: string;
  good: GoodInfo;
}
