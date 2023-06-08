import './allClear.css';
import { BiTask } from 'react-icons/bi';

export const AllClear = () => {
  return (
    <div className="all-clear-div">
      <BiTask size={'14rem'} color="rgb(188, 187, 187)" />
      <h4>
        It seems that you are new around here, start by creating a task, <br />
        by pressing the + button on the left of your screen
      </h4>
    </div>
  );
};
