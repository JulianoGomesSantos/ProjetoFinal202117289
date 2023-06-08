import api from '../config/api';

const userHasTasks = (id) => {
  api
    .get(`/user/hasTasks/${id}`, {})
    .then((res) => {
      alert(res.data.status);
      return res.data.status;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default userHasTasks;
