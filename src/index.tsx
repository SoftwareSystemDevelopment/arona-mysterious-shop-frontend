/* @refresh reload */
import { JSX, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
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
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

render(
  () => (
    <Router root={App}>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/details/*" component={GoodDetails} />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!,
);
