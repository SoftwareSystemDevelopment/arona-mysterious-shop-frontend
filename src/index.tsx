/* @refresh reload */
import { JSX, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Navbar } from "~/components";
import "./index.css";

interface AppProps {
  children?: JSX.Element;
}

const App = (props: AppProps) => (
  <>
    <Navbar />
    {props.children}
  </>
);

const Auth = lazy(() => import("~/pages/Auth"));
const GoodDetails = lazy(() => import("~/pages/GoodDetails"));
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

render(
  () => (
    <Router root={App}>
      <Route path="/auth" component={Auth} />
      <Route path="/details/*" component={GoodDetails} />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!,
);
