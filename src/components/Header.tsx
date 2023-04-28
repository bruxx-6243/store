import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="container max-w-4xl mx-auto flex items-center justify-center my-6">
      <Link to="/">
        <img src={logo} alt="Logo bruxx store" width={100} />
      </Link>
    </div>
  );
};
