import "./card.css";

import { BiCheckbox } from "react-icons/bi";
import { BiCheckboxChecked } from "react-icons/bi";

// use state import
import { useState } from "react";

export const Card = (props) => {
  const [completed, setCompleted] = useState(props.completed);

  const cardStateColor = (state) => {
    setCompleted(state);
    const cards = JSON.parse(localStorage.getItem("localCards"));
    var cardIndex = cards.findIndex((card) => card.id === props.id);

    cards[cardIndex].completed = state;

    localStorage.setItem("localCards", JSON.stringify(cards));
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>{props.task}</h2>
      </div>
      <div className="card-description">
        <h3>{props.description}</h3>
      </div>
      <div className="card-checkbox">
        {completed ? (
          <div>
            <BiCheckboxChecked
              size={"42px"}
              color="green"
              onClick={() => cardStateColor(false)}
            />
          </div>
        ) : (
          <div>
            <BiCheckbox
              size={"42px"}
              color={"#e49b9b"}
              onClick={() => cardStateColor(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
