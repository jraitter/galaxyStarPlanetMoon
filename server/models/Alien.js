import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Alien = new Schema(
  {
    title: { type: String, required: true, default: 0 },
    description: { type: String, required: false },
    galaxies: [{ type: ObjectId, ref: "Galaxy" }],
    stars: [{ type: ObjectId, ref: "Star" }],
    planets: [{ type: ObjectId, ref: "Planet" }],
    moons: [{ type: ObjectId, ref: "Moon" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Alien;
