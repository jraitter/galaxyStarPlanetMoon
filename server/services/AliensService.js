import mongoose from "mongoose";
import Alien from "../models/Alien.js";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Alien", Alien);

class AliensService {
  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }

  async addGalaxy(params) {
    let data = await _repository.findById(params.id)
    if (data.galaxies.includes(params.galaxyId)) {
      return ("This Galaxy already exists in array")
    }
    let galaxy = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $push: {
          galaxies: params.galaxyId
        }
      },
      { new: true }
    );
    return (galaxy);
  }

  async removeGalaxy(params) {
    let galaxy = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $pull: {
          galaxies: params.galaxyId
        }
      },
      { new: true }
    );
    return (galaxy);
  }


  async addStar(params) {
    let data = await _repository.findById(params.id)
    if (data.stars.includes(params.starId)) {
      return ("This Star already exists in array")
    }
    let star = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $push: {
          stars: params.starId
        }
      },
      { new: true }
    );
    return (star);

  }

  async removeStar(params) {
    let star = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $pull: {
          stars: params.starId
        }
      },
      { new: true }
    );
    return (star);
  }

  async addPlanet(params) {
    let data = await _repository.findById(params.id)
    if (data.planets.includes(params.planetId)) {
      return ("This Planet already exists in array")
    }
    let planet = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $push: {
          planets: params.planetId
        }
      },
      { new: true }
    );
    return (planet);

  }

  async removePlanet(params) {
    let planet = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $pull: {
          planets: params.planetId
        }
      },
      { new: true }
    );
    return (planet);
  }

  async addMoon(params) {
    let data = await _repository.findById(params.id)
    if (data.moons.includes(params.moonId)) {
      return ("This Moon already exists in array")
    }
    let moon = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $push: {
          moons: params.moonId
        }
      },
      { new: true }
    );
    return (moon);

  }

  async removeMoon(params) {
    let moon = await _repository.findOneAndUpdate(
      { _id: params.id },
      {
        $pull: {
          moons: params.moonId
        }
      },
      { new: true }
    );
    return (moon);
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }
}

const aliensService = new AliensService();
export default aliensService;
