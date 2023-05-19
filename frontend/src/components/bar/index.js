import "./bar.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
export const Navbar = () => {
  return (
    <div className="container">
      <div>
        <BsPersonCircle />
      </div>
      <div>
        <AiOutlinePlusCircle />
      </div>
      <div>
        <CgLogOut />
      </div>
    </div>
  );
};
