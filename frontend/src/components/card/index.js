import "./card.css";

import { BiCheckbox } from "react-icons/bi";
import { BiCheckboxChecked } from "react-icons/bi";

// recieve a object via params
export const Card = (props) => {
  return (
    // to do container items

    <div className="card">
      <div className="card-title">
        <h2>{props.task}</h2>
      </div>
      <div className="card-description">
        <h3>{props.description}</h3>
      </div>
      <div className="card-checkbox">
        {props.complete ? (
          <div>
            <BiCheckboxChecked size={"42px"} color="green" />
          </div>
        ) : (
          <div>
            <BiCheckbox size={"42px"} color={"#e49b9b"} />
          </div>
        )}
      </div>
    </div>
  );
};
