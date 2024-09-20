import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { AppRoutes } from "./routes.tsx";
import Header from "./components/Header/Header.component.tsx";
import GlobalStyle from "./main.styles.tsx";
const routes = AppRoutes();
const router = createBrowserRouter(routes as RouteObject[]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
