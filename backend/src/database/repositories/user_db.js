// Este arquivo é responsável por fazer a comunicação com o banco de dados
// para as operações de CRUD (Create, Read, Update, Delete) das tarefas.

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createUserRepository = async (params) => {
  const {
    name,
    profile_image,
    password,
    username,
    email,
    createdAt,
    updatedAt,
  } = params;

  const taskCreated = await prisma.users.create({
    data: {
      name,
      profile_image,
      password,
      username,
      email,
      created_at: createdAt,
      updated_at: updatedAt,
    },
  });

  return taskCreated;
};

const getUserRepository = async ({ userId, username, email }) => {
  if (userId) {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  if (username) {
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    return user;
  }

  if (email) {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }
};

export { createUserRepository, getUserRepository };
