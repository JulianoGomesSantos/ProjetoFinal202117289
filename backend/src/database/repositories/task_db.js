import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createTaskRepository = async (params) => {
  const { taskName, description, priority, userId, updatedAt, createdAt } =
    params;

  const taskCreated = await prisma.tasks.create({
    data: {
      task_name: taskName,
      description: description,
      userId: userId,
      priority: priority,
      updated_at: updatedAt,
      created_at: createdAt,
      completed: false,
    },
  });

  return taskCreated;
};

const updateTaskRepository = async (params) => {
  const { id, taskName, description, priority, completed } = params;

  const task = await getTaskRepository(id);

  if (!task) {
    return null;
  }

  const taskUpdated = await prisma.tasks.update({
    where: {
      id: parseInt(id),
    },
    data: {
      task_name: taskName,
      description: description,
      priority: priority,
      updated_at: new Date(),
      completed: completed,
    },
  });

  return taskUpdated;
};

const getTaskRepository = async (taskId) => {
  const task = await prisma.tasks.findUnique({
    where: {
      id: parseInt(taskId),
    },
  });

  if (!task) {
    return null;
  }

  return task;
};

const listTaskRepository = async ({ userId, completed }) => {
  const dynamicCompleted = completed === 'true' ? undefined : false;

  const tasks = await prisma.tasks.findMany({
    where: {
      userId: parseInt(userId),
    },
    where: {
      completed: dynamicCompleted,
    },
    orderBy: {
      priority: 'desc',
    },
    orderBy: {
      completed: 'asc',
    },
  });

  return tasks;
};

const deleteTaskRepository = async (id) => {
  const task = await getTaskRepository(id);

  if (!task) {
    return null;
  }

  const tasks = await prisma.tasks.delete({
    where: {
      id: parseInt(id),
    },
  });

  return tasks;
};

export {
  createTaskRepository,
  listTaskRepository,
  updateTaskRepository,
  getTaskRepository,
  deleteTaskRepository,
};
