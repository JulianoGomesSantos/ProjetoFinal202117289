// Este arquivo é responsável por fazer a comunicação com o banco de dados
// para as operações de CRUD (Create, Read, Update, Delete) das tarefas.

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createTaskRepository = async (params) => {
  const { taskName, description, priority, userId, updatedAt, createdAt } =
    params;

  const taskCreated = await prisma.task.create({
    data: {
      task_name: taskName,
      description: description,
      userId: userId,
      priority: priority,
      updated_at: updatedAt,
      created_at: createdAt,
    },
  });

  return taskCreated;
};

const updateTaskRepository = async (params) => {
  const { id, taskName, description, priority } = params;

  const task = await getTaskRepository(id);

  if (!task) {
    return null;
  }

  const taskUpdated = await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      task_name: taskName,
      description: description,
      priority: priority,
      updated_at: new Date(),
    },
  });

  return taskUpdated;
};

const getTaskRepository = async (taskId) => {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(taskId),
    },
  });

  if (!task) {
    return null;
  }

  return task;
};

const listTaskRepository = async (userId) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId: parseInt(userId),
    },
  });

  return tasks;
};

const deleteTaskRepository = async (id) => {
  const task = await getTaskRepository(id);

  if (!task) {
    return null;
  }

  const tasks = await prisma.task.delete({
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
