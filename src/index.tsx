/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Auth, GoodsDetail, Home, NotFound } from "~/pages";
import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route path="/detail/*" component={GoodsDetail} />
      <Route path="*/404" component={NotFound} />
    </Router>
  ),
  root!,
);
