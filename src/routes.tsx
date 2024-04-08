import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Homepage, Recommend, Login, Register } from "./pages";

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

const loginpage = new Route({
  getParentRoute: () => rootRoute,
  path: "login",
  component: Login
})

const registerpage = new Route({
  getParentRoute: () => rootRoute,
  path: "register",
  component: Register
})

const routeTree = rootRoute.addChildren([homepage, recommendpage, loginpage, registerpage]);

const router = new Router({ routeTree });

export default router;
