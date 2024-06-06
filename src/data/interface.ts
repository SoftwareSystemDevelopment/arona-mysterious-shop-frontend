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

export interface GoodInfo {
  id: number;
  name: string;
  cover: string;
  price: number;
  stock: number;
  types: string[];
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
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
  goodId: string;
  title: string;
  cover: string;
}
