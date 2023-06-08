import listTasks from '../tasks/list.js';

const hasTasks = async (userId) => {
  const hasTasks = await listTasks({ userId: userId });

  if (hasTasks.length == 0) {
    return 0;
  }

  const hasNonCompletedTasks = await listTasks({
    userId: userId,
    completed: true,
  });

  if (hasNonCompletedTasks.length == 0) {
    return 1;
  }

  return 2;
};

export default hasTasks;
