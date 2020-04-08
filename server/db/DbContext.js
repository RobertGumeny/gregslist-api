import ValueSchema from "../models/Value";
import JobSchema from "../models/Job";
import HomeSchema from "../models/Home";
import CarSchema from "../models/Car";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Homes = mongoose.model("Home", HomeSchema);
  Jobs = mongoose.model("Job", JobSchema);
}

export const dbContext = new DbContext();
