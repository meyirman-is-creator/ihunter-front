import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
export default function Header() {
  return (
    <header>
      <div className="w-[1150px] px-[15px] mx-[auto] h-[90px] flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="max-w-[150px] max-h-[50px]" />
        </Link>
      </div>
    </header>
  );
}
