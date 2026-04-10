import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/navBar";
const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
