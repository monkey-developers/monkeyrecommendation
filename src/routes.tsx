import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Homepage, Recommend } from "./pages";

const rootRoute = new RootRoute();
const homepage = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});
const recommendpage = new Route({
  getParentRoute: () => rootRoute,
  path: "recommend",
  component: Recommend,
});

const routeTree = rootRoute.addChildren([homepage, recommendpage]);

const router = new Router({ routeTree });

export default router;
