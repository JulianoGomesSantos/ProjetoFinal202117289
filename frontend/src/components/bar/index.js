import "./bar.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
export const Navbar = () => {
  return (
    <div className="container">
      <BsPersonCircle className="person-icon" />
      <AiOutlinePlusCircle className="plus-circle-icon" />
      <CgLogOut className="log-out-icon" />
    </div>
  );
};
