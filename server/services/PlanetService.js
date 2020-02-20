import mongoose from "mongoose";
import Planet from "../models/Planet.js";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Planet", Planet);
class PlanetService {
  async getAll() {
    // let data = await _repository.find({});
    // return data
    return await _repository.find({})
      .populate("galaxyId", "title")
      .populate("starId", "title");
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async getByStarId(id) {
    return await _repository.find({ starId: id }).populate("starId");
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

const planetService = new PlanetService();
export default planetService;

