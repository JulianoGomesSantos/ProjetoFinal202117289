import './card.css';

import {
  RiCheckboxCircleLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from 'react-icons/ri';

import { RxHamburgerMenu } from 'react-icons/rx';

import { BsFillTrash3Fill } from 'react-icons/bs';

import Modal from 'react-modal';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import api from '../../config/api';

export const Card = (props) => {
  const [completed, setCompleted] = useState(props.completed);

  const [modal, setModal] = useState(false);

  const [task, setTask] = useState(props.task);
  const [description, setDescription] = useState(props.description);
  const [priority, setPriority] = useState(props.priority);

  const priorityColor = () => {
    if (props.priority === 'low') {
      return '#11e111';
    } else if (priority === 'medium') {
      return '#d2aa09';
    } else if (priority === 'high') {
      return '#c20f0f';
    }
  };

  const cardStateColor = (state) => {
    api
      .put('/task/update', { id: props.id, completed: state })
      .then(() => {
        setCompleted(state);
        return;
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
        alert(err);

        return err;
      });
  };

  const updateCard = () => {
    api
      .put('/task/update', {
        id: props.id,
        taskName: task,
        description: description,
        priority: priority,
      })
      .then(() => {
        window.location.reload();

        return;
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
        alert(err);

        return err;
      });
  };

  const deleteCard = () => {
    api
      .delete(`/task/delete/${props.id}`)
      .then(() => {
        alert('Task deleted sucessfully');
        window.location.reload();

        setModal(false);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
        alert(err);

        return err;
      });
  };

  if (modal) {
    return (
      <div className="card">
        <div className="card-checkbox">
          {completed ? (
            <div>
              <span>
                <RiCheckboxCircleLine
                  size={'32px'}
                  color="#672bde"
                  onClick={() => cardStateColor(false)}
                />
              </span>
            </div>
          ) : (
            <div>
              <span>
                <RiCheckboxBlankCircleLine
                  size={'32px'}
                  color="#672bde"
                  onClick={() => cardStateColor(true)}
                />
              </span>
            </div>
          )}
        </div>
        <div className="card-title">
          <h2>{props.task}</h2>
        </div>
        <div className="card-options">
          <RxHamburgerMenu
            size={'20px'}
            color={priorityColor(props.priority)}
          />
        </div>
        <div className="card-priority">
          <div>
            <RiCheckboxBlankCircleFill size={'20px'} color={priorityColor()} />
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
            <BsFillTrash3Fill
              className="delete-card-modal-button"
              color="#672bde"
              size={'20px'}
              onClick={() => deleteCard()}
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
                Update task
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }

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
      <div className="card-options">
        <RxHamburgerMenu
          size={'20px'}
          color="#672bde"
          className="card-options-circle"
          onClick={() => setModal(true)}
        />
      </div>
      <div className="card-priority">
        <div>
          <RiCheckboxBlankCircleFill
            size={'20px'}
            color={priorityColor(props.priority)}
          />
        </div>
      </div>
    </div>
  );
};
