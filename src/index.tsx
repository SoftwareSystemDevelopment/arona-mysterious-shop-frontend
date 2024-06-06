/* @refresh reload */
import { JSX, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { StateProvider } from "~/store";
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
const GoodDetails = lazy(() => import("~/pages/GoodDetails"));
const GoodList = lazy(() => import("~/pages/GoodList"));
const GoodUpload = lazy(() => import("~/pages/GoodUpload"));
const Shop = lazy(() => import("~/pages/Shop"));
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
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <Router base="/arona-mysterious-shop-frontend" root={App}>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/goods/:id" component={GoodDetails} />
          <Route path="/goods" component={GoodList} />
          <Route path="/goods/upload" component={GoodUpload} />
          <Route path="/shops/:id" component={Shop} />
          <Route path="/user" component={UserCenterWrapper}>
            <UserCenterRoutes />
          </Route>
          <Route path="/" component={Home} />
          <Route path="*404" component={NotFound} />
        </Router>
      </QueryClientProvider>
    </StateProvider>
  ),
  document.getElementById("root")!,
);
