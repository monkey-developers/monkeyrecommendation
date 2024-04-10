import { RootRoute, Route, Router } from "@tanstack/react-router";
import { ReviewPage, Recommend, Login, Register } from "./pages";
import { HomePage } from "./pages/home";

const rootRoute = new RootRoute();

const reviewpage = new Route({
  getParentRoute: () => rootRoute,
  path: "/review",
  component: ReviewPage,
});

const homepage = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
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

const routeTree = rootRoute.addChildren([reviewpage, recommendpage, loginpage, registerpage, homepage]);

const router = new Router({ routeTree });

export default router;
