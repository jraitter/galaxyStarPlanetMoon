import mongoose from "mongoose";
import Moon from "../models/Moon.js";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Moon", Moon);
class MoonService {
  async getAll() {
    // let data = await _repository.find({});
    // return data
    return await _repository.find({})
      .populate("galaxyId", "title")
      .populate("starId", "title")
      .populate("planetId", "title");
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async getByPlanetId(id) {
    return await _repository.find({ planetId: id })
      .populate("planetId");
  }

  // create, from create in controller is a post
  async create(rawData) {
    return await _repository.create(rawData);
  }

  // update, from edit in controller is a put
  async update(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }
}

const moonService = new MoonService();
export default moonService;

