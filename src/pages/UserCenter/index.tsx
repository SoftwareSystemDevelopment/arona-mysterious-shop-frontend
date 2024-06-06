import { useNavigate } from "@solidjs/router";

export { default as UserCenter_Basic } from "./basic";
export { default as UserCenter_Address } from "./address";
export { default as UserCenter_Order } from "./order";
export const UserCenter_Default = () => {
  const nav = useNavigate();
  nav("/user/basic", { replace: true });
  return <></>;
};
