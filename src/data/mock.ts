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
    productPrice: 5.0,
    productCategoryName: "ooparts",
    stock: 0,
    providerId: 6,
    productDescription: "2024-06-05 20:24:28",
  },
  {
    productId: 1000841,
    productName: "111111",
    productPrice: 6.12,
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

export const mockShops = [
  {
    id: "123",
    name: "1店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称",
    description:
      "店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述店铺描述",
    goods: [mockGoods[0], mockGoods[2]],
  },
  {
    id: "456",
    name: "2店铺名称",
    description: "店铺描述",
    goods: [mockGoods[1]],
  },
  {
    id: "789",
    name: "3店铺名称",
    description: "店铺描述",
    goods: [],
  },
];

export const mockOrders = [
  {
    orderId: "123",
    orderStatus: "待付款",
    createDate: 123456123, // time stamp
    address: {
      name: "AerVento",
      tel: "12345612345",
      address:
        "address-address-address-address-address-address-address-address-address",
    },
    goods: [
      {
        good: mockGoods[0],
        count: 1,
      },
      {
        good: mockGoods[1],
        count: 23,
      },
      {
        good: mockGoods[2],
        count: 114514,
      },
    ],
  },
  {
    orderId: "123",
    orderStatus: "已送达",
    createDate: 18732134213, // time stamp
    address: {
      name: "AerVento",
      tel: "12345612345",
      address:
        "address-address-address-address-address-address-address-address-address",
    },
    goods: [
      {
        good: mockGoods[0],
        count: 1,
      },
      {
        good: mockGoods[1],
        count: 23,
      },
      {
        good: mockGoods[2],
        count: 114514,
      },
    ],
  },
];
