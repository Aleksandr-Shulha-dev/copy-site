import dotenv from 'dotenv';

dotenv.config();

const ENV = {
  PORT: process.env.PORT || "8001",
}

enum Api {
  BASE = '/',
  SEND = '/send'
}

export { ENV, Api }