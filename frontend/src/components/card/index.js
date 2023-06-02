import './card.css';

import { BiCheckbox } from 'react-icons/bi';
import {
  RiCheckboxCircleLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from 'react-icons/ri';

import Modal from 'react-modal';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const Card = (props) => {
  const [completed, setCompleted] = useState(props.completed);

  const [modal, setModal] = useState(false);

  const [task, setTask] = useState(props.task);
  const [description, setDescription] = useState(props.description);
  const [priority, setPriority] = useState(props.priority);

  const priorityColor = (priority) => {
    if (priority === 'low') {
      return '#11e111';
    } else if (priority === 'medium') {
      return '#d2aa09';
    } else if (priority === 'high') {
      return '#c20f0f';
    }
  };

  const cardStateColor = (state) => {
    setCompleted(state);
    const cards = JSON.parse(localStorage.getItem('localCards'));
    var cardIndex = cards.findIndex((card) => card.id === props.id);

    cards[cardIndex].completed = state;

    localStorage.setItem('localCards', JSON.stringify(cards));
  };

  const updateCard = () => {
    const cards = JSON.parse(localStorage.getItem('localCards'));
    var cardIndex = cards.findIndex((card) => card.id === props.id);

    cards[cardIndex].task = task;
    cards[cardIndex].description = description;
    cards[cardIndex].priority = priority;

    localStorage.setItem('localCards', JSON.stringify(cards));
  };

  if (modal) {
    return (
      <div className="card">
        <div className="card-checkbox">
          {completed ? (
            <div>
              <RiCheckboxCircleLine
                size={'32px'}
                color="#672bde"
                onClick={() => cardStateColor(false)}
              />
            </div>
          ) : (
            <div>
              <RiCheckboxBlankCircleLine
                size={'32px'}
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
              size={'20px'}
              color={priorityColor(props.priority)}
            />
          </div>
        </div>
        <Modal
          isOpen={modal}
          contentLabel="Update task"
          className="card-modal"
          overlayClassName="modal-overlay"
          onRequestClose={() => setModal(false)}
        >
          <div className="card-modal-container">
            <AiOutlineClose
              className="close-card-modal-button"
              color="#672bde"
              onClick={() => setModal(false)}
            />
            <form>
              <div className="card-modal-input-container">
                <label>Task name</label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
              </div>
              <div className="card-modal-input-container">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="card-modal-input-container">
                <label>Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option selected value="low">
                    Low
                  </option>
                </select>
              </div>
              <button type="submit" onClick={() => updateCard()}>
                Create task
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }

  return (
    <div className="card" onClick={() => setModal(true)}>
      <div className="card-checkbox">
        {completed ? (
          <div>
            <RiCheckboxCircleLine
              size={'32px'}
              color="#672bde"
              onClick={() => cardStateColor(false)}
            />
          </div>
        ) : (
          <div>
            <RiCheckboxBlankCircleLine
              size={'32px'}
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
            size={'20px'}
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
