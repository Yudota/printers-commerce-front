import { Catalog } from "./pages/Catalog";
import { Checkout } from "./pages/Checkout";
import { ConfirmationOrder } from "./pages/ConfirmationOrder";
import { DetailsProduct } from "./pages/DetailsProduct";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";

interface IRoute {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  loader?: JSX.Element;
  children?: IRoute[];
}
const makeRoute = (obj: IRoute) => ({ ...obj });
export const AppRoutes = () => {
  return [
    makeRoute({ path: "/*", element: <Home /> }),
    makeRoute({ path: "/products", element: <Catalog /> }),
    makeRoute({ path: "/checkout", element: <Checkout /> }),
    makeRoute({ path: "/confirm-order", element: <ConfirmationOrder /> }),
    makeRoute({ path: "/product/:id", element: <DetailsProduct /> }),
    makeRoute({ path: "/profile", element: <Profile /> }),
    makeRoute({ path: "/signup", element: <Signup /> }),
    makeRoute({ path: "/login", element: <Login /> }),
  ];
};
