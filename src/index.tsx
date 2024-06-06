/* @refresh reload */
import { JSX, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { StateProvider } from "~/store";
import { Header } from "~/components";
import {
  UserCenter_Address,
  UserCenter_Basic,
  UserCenter_Default,
  UserCenter_Order,
} from "./pages/UserCenter";
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
const GoodDetails = lazy(() => import("~/pages/GoodDetails"));
const GoodList = lazy(() => import("~/pages/GoodList"));
const Shop = lazy(() => import("~/pages/Shop"));
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

const queryClient = new QueryClient();

render(
  () => (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <Router base="/arona-mysterious-shop-frontend" root={App}>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/goods/:id" component={GoodDetails} />
          <Route path="/goods" component={GoodList} />
          <Route path="/shops/:id" component={Shop} />

          <Route path="/user" component={UserCenter_Default} />
          <Route path="/user/basic" component={UserCenter_Basic} />
          <Route path="/user/address" component={UserCenter_Address} />
          <Route path="/user/order" component={UserCenter_Order} />

          <Route path="/" component={Home} />
          <Route path="*404" component={NotFound} />
        </Router>
      </QueryClientProvider>
    </StateProvider>
  ),
  document.getElementById("root")!,
);
