import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment vairables");
}

if(!process.env.UPSTASH_REDIS_REST_URL) {
  throw new Error("UPSTASH_REDIS_REST_URL is not defined in the environment vairables")
}

if(!process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error("UPSTASH_REDIS_REST_TOKEN is not defined in the environment vairables")
}

// if (!process.env.JWT_SECRET) {
//   throw new Error("JWT_SECRET is not defined in the environment vairables");
// }

const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN
  // JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
