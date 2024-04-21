import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-5 flex gap-5 bg-gray-100">
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link>
    </div>
  );
};

export default Header;
