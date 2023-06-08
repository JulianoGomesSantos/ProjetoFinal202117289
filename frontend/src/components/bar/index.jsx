import './bar.css';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';
import { useState } from 'react';
import Modal from 'react-modal';
import api from '../../config/api';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const { id } = JSON.parse(localStorage.getItem('user')) || { id: 0 };
  const token = localStorage.getItem('token');

  const newCard = {
    taskName: name,
    completed: false,
    description: description,
    priority: priority,
    userId: id,
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/');
  };

  function insertCards() {
    api
      .post('/task/create', newCard, {
        headers: {
          'x-access-token': token,
        },
      })
      .then(() => {
        alert('Task created successfully!');
        return;
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
        alert(err);

        return err;
      });
  }

  function hasImage() {
    if (localStorage.getItem('user')) {
      const { profile_image } = JSON.parse(localStorage.getItem('user'));

      return profile_image;
    }

    return null;
  }

  const image = hasImage();

  if (modal) {
    return (
      <div>
        <div className="container">
          {image ? (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="person-icon-div"
            />
          ) : (
            <BsPersonCircle className="person-icon" />
          )}
          <AiOutlineClose
            className="plus-circle-icon"
            color="white"
            onClick={() => setModal(false)}
          />

          <CgLogOut className="log-out-icon" />
        </div>
        <Modal
          isOpen={modal}
          contentLabel="Adicionar nova task"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div>
            <div className="texts">
              <h2>Create a new task</h2>
              <h3>Organize your day to save your time with small tasks</h3>
            </div>
            <form>
              <input
                type="text"
                placeholder="Task name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <div className="priority-container">
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

              <button type="submit" onClick={() => insertCards()}>
                Create task
              </button>
            </form>
          </div>
        </Modal>
        <div className="arrow-box" />
      </div>
    );
  }

  return (
    <div className="container">
      {image ? (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="person-icon-div"
        />
      ) : (
        <BsPersonCircle className="person-icon" />
      )}
      <AiOutlinePlusCircle
        className="plus-circle-icon"
        onClick={() => setModal(true)}
      />
      <CgLogOut className="log-out-icon" onClick={() => handleLogout()} />
    </div>
  );
};
