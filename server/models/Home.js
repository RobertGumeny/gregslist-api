import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Home = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: "A Home" },
    imgUrl: { type: String, default: "No image provided" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Home;
