import { Address, GoodInfo } from "~/data/interface";

export const mockGoods: GoodInfo[] = [
  {
    productId: 1000839,
    productName: "111",
    productPrice: 100.33,
    productCategoryName: "ooparts",
    stock: 100,
    providerId: 6,
    productDescription: "2024-06-05 18:14:26",
  },
  {
    productId: 1000840,
    productName: "test",
    productPrice: 0.0,
    productCategoryName: "ooparts",
    stock: 0,
    providerId: 6,
    productDescription: "2024-06-05 20:24:28",
  },
  {
    productId: 1000841,
    productName: "111111",
    productPrice: 0.0,
    productCategoryName: "ooparts",
    stock: 0,
    providerId: 6,
    productDescription: "2024-06-06 15:20:41",
  },
];

export const mockAddresses: Address[] = [
  {
    receiver: "AerVento",
    userPhone: "12345612345",
    addressName:
      "address-address-address-address-address-address-address-address-address",
  },
  {
    receiver: "AerVento",
    userPhone: "12345612345",
    addressName:
      "address-address-address-address-address-address-address-address-address",
  },
  {
    receiver: "AerVento",
    userPhone: "12345612345",
    addressName:
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
