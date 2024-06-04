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
const GoodDetails = lazy(() => import("~/pages/GoodDetails"));
const GoodList = lazy(() => import("~/pages/GoodList"));
const Shop = lazy(() => import("~/pages/Shop"));
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

const queryClient = new QueryClient();

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router base="/arona-mysterious-shop-frontend" root={App}>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/goods/:id" component={GoodDetails} />
        <Route path="/goods" component={GoodList} />
        <Route path="/shops/:id" component={Shop} />
        <Route path="/" component={Home} />
        <Route path="*404" component={NotFound} />
      </Router>
    </QueryClientProvider>
  ),
  document.getElementById("root")!,
);
