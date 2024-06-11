import { CommentInfo } from "./interface";

export const mockGoods = [
  {
    productId: 1000839,
    productName: "111",
    productPrice: 100.33,
    productCategoryName: "ooparts",
    stock: 100,
    providerId: "6",
    productCreateDate: "2024-06-05 18:14:26",
  },
  {
    productId: 1000840,
    productName: "test",
    productPrice: 0.0,
    productCategoryName: "ooparts",
    stock: 0,
    providerId: "6",
    productCreateDate: "2024-06-05 20:24:28",
  },
  {
    productId: 1000841,
    productName: "111111",
    productPrice: 0.0,
    productCategoryName: "ooparts",
    stock: 0,
    providerId: "6",
    productCreateDate: "2024-06-06 15:20:41",
  },
];

export const mockAddresses = [
  {
    name: "AerVento",
    tel: "12345612345",
    address:
      "address-address-address-address-address-address-address-address-address",
  },
  {
    name: "AerVento",
    tel: "12345612345",
    address:
      "address-address-address-address-address-address-address-address-address",
  },
  {
    name: "AerVento",
    tel: "12345612345",
    address:
      "address-address-address-address-address-address-address-address-address",
  },
];

export const mockOrders = [
  {
    orderId: "123",
    orderStatus: "待付款",
    shopId: "123",
    shopName:
      "店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称",
    good: mockGoods[0],
  },
  {
    orderId: "123",
    orderStatus: "待付款",
    shopId: "123",
    shopName: "店铺名称",
    good: mockGoods[1],
  },
];

export const mockComments: CommentInfo[] = [
  {
    commentId: 123,
    commentUserId: 123,
    commentProductId: 123,
    commentContent: "垃圾",
    commentCreateDate: "2021年3月9日15:12:22",
  },
  {
    commentId: 123,
    commentUserId: 123,
    commentProductId: 123,
    commentContent: "非常好产品，下次还会买",
    commentCreateDate: "2021年3月3日15:12:12",
  },
];
