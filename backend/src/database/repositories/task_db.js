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

const listTaskRepository = async (userId) => {
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

export { createTaskRepository };
