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

export interface OrderItemInfo {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  orderItemCreateDate: string;
  orderItemUpdateDate: string;
  productName: string;
}

export interface OrderInfo {
  orderId: number;
  orderAddress: string;
  orderReceiver: string;
  orderMobile: string;
  orderPayDate: string;
  orderStatus: number;
  orderItems: OrderItemInfo[];
}

export interface CartItemInfo {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
}

export interface AddressInfo {
  addressAreaId: number;
  addressUserId: number;
  addressName: string;
  receiver: string;
  userPhone: string;
}
