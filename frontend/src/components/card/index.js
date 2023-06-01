import "./card.css";

import { BiCheckbox } from "react-icons/bi";
import {
  RiCheckboxCircleLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

// use state import
import { useState } from "react";

export const Card = (props) => {
  const [completed, setCompleted] = useState(props.completed);

  const priorityColor = (priority) => {
    if (priority === "low") {
      return "#11e111";
    } else if (priority === "medium") {
      return "#d2aa09";
    } else if (priority === "high") {
      return "#c20f0f";
    }
  };

  const cardStateColor = (state) => {
    setCompleted(state);
    const cards = JSON.parse(localStorage.getItem("localCards"));
    var cardIndex = cards.findIndex((card) => card.id === props.id);

    cards[cardIndex].completed = state;

    localStorage.setItem("localCards", JSON.stringify(cards));
  };

  return (
    <div className="card">
      <div className="card-checkbox">
        {completed ? (
          <div>
            <RiCheckboxCircleLine
              size={"32px"}
              color="#672bde"
              onClick={() => cardStateColor(false)}
            />
          </div>
        ) : (
          <div>
            <RiCheckboxBlankCircleLine
              size={"32px"}
              color="#672bde"
              onClick={() => cardStateColor(true)}
            />
          </div>
        )}
      </div>
      <div className="card-title">
        <h2>{props.task}</h2>
      </div>
      <div className="card-priority">
        <div>
          <RiCheckboxBlankCircleFill
            size={"20px"}
            color={priorityColor(props.priority)}
          />
        </div>
      </div>
      {/* <div className="card-description">
        <h3>{props.description}</h3>
      </div> */}
    </div>
  );
};
