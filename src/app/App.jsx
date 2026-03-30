import Layout from "./layouts/layout";
import Main from "./layouts/main";
import Users from "./layouts/users";
import Login from "./layouts/login";
import NotFound from "./layouts/notFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/users/:userId?", element: <Users /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
