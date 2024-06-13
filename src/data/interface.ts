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
  userId: number;
  userName: string;
  userAccount: string;
  userAvatar: string | null;
  userRole: string;
  cartId: number;
}

export interface List<T> {
  records: T[];
  total: number;
}

export interface GoodInfo {
  productId: number;
  productName: string;
  productPrice: number;
  productCategoryName: string;
  stock: number;
  providerId: number;
  productDescription: string;
}

export interface Address {
  addressName: string;
  receiver: string;
  userPhone: string;
}

// TODO: sync with backend
export interface Order {
  orderId: string;
  orderStatus: string;
  shopId: string;
  shopName: string;
  good: GoodInfo;
}
