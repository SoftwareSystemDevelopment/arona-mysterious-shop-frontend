/* @refresh reload */
import { JSX, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Header } from "~/components";
import "./index.css";

interface AppProps {
  children?: JSX.Element;
}

const App = (props: AppProps) => (
  <>
    <Header />
    {props.children}
  </>
);

const Register = lazy(() => import("~/pages/Auth/register"));
const Login = lazy(() => import("~/pages/Auth/login"));
const GoodUpload = lazy(() => import("~/pages/GoodUpload"));
const GoodDetails = lazy(() => import("~/pages/GoodDetails"));
const GoodList = lazy(() => import("~/pages/GoodList"));
const ShoppingCart = lazy(() => import("~/pages/ShoppingCart"));
// const Shop = lazy(() => import("~/pages/Shop"));
const OrderDetail = lazy(() => import("~/pages/OrderDetail"));
const UserCenterWrapper = lazy(async () => ({
  default: (await import("~/pages/UserCenter")).UserCenterWrapper,
}));
const UserCenterRoutes = lazy(async () => ({
  default: (await import("~/pages/UserCenter")).UserCenterRoutes,
}));
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

const queryClient = new QueryClient();

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router base="/arona-mysterious-shop-frontend" root={App}>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/goods/upload" component={GoodUpload} />
        <Route path="/goods/:id" component={GoodDetails} />
        <Route path="/goods" component={GoodList} />
        <Route path="/cart" component={ShoppingCart} />
        {/* <Route path="/shops/:id" component={Shop} /> */}
        <Route path="/orders/:id" component={OrderDetail} />
        <Route path="/user" component={UserCenterWrapper}>
          <UserCenterRoutes />
        </Route>
        <Route path="/" component={Home} />
        <Route path="*404" component={NotFound} />
      </Router>
    </QueryClientProvider>
  ),
  document.getElementById("root")!,
);
