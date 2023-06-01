import "./bar.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { useState } from "react";
import Modal from "react-modal";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const currentCards = JSON.parse(localStorage.getItem("localCards"));

  const lastId = currentCards ? currentCards[currentCards.length - 1].id : 0;

  const submit = () => {
    if (lastId >= 1) {
      const newTask = {
        id: lastId + 1,
        task: name,
        completed: false,
        description: description,
        priority: priority,
      };

      currentCards.push(newTask);

      localStorage.setItem("localCards", JSON.stringify(currentCards));

      alert("Task created successfully!");

      window.location.reload();
    } else {
      const newTask = [
        {
          id: 1,
          task: name,
          completed: false,
          description: description,
          priority: priority,
        },
      ];

      localStorage.setItem("localCards", JSON.stringify(newTask));

      alert("Task created successfully!");

      window.location.reload();
    }
  };

  if (modal) {
    return (
      <div>
        <div className="container">
          <BsPersonCircle className="person-icon" />
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
              <h3>Organize your day to save your time with small tasks</h3>{" "}
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

              <button type="submit" onClick={() => submit()}>
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
      <BsPersonCircle className="person-icon" />
      <AiOutlinePlusCircle
        className="plus-circle-icon"
        onClick={() => setModal(true)}
      />
      <CgLogOut className="log-out-icon" />
    </div>
  );
};
