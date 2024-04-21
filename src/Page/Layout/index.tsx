import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
    </>
  );
};

export default Layout;
