import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected");
} catch (e) {
  console.log(e);
}

const db = mongoClient.db("PokemarketDb");

export const usersCollection = db.collection("users");
export const productsCollection = db.collection("products");
export const salesCollection = db.collection("sales");
export const sessionsCollection = db.collection("sessions");
