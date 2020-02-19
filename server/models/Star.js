import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


const Star = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    galaxyId: { type: ObjectId, ref: "Galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
