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

  const userCreated = await prisma.users.create({
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

  return userCreated;
};

const getUserByIdRepository = async ({ userId }) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const getUserByUsernameRepository = async ({ username }) => {
  const user = await prisma.users.findUnique({
    where: {
      username: username,
    },
  });

  return user;
};

const getUserByEmailRepository = async ({ email }) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};

export {
  createUserRepository,
  getUserByIdRepository,
  getUserByUsernameRepository,
  getUserByEmailRepository,
};
