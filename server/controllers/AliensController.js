import express from "express";
import AliensService from "../services/AliensService.js";

export default class AliensController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id/addGalaxy/:galaxyId", this.addGalaxy)
      .put("/:id/removeGalaxy/:galaxyId", this.removeGalaxy)
      .put("/:id/addStar/:starId", this.addStar)
      .put("/:id/removeStar/:starId", this.removeStar)
      .put("/:id/addPlanet/:planetId", this.addPlanet)
      .put("/:id/removePlanet/:planetId", this.removePlanet)
      .put("/:id/addMoon/:moonId", this.addMoon)
      .put("/:id/removeMoon/:moonId", this.removeMoon)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await AliensService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await AliensService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }


  async create(req, res, next) {
    try {
      let data = await AliensService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async addGalaxy(req, res, next) {
    try {
      let data = await AliensService.addGalaxy(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removeGalaxy(req, res, next) {
    try {
      let data = await AliensService.removeGalaxy(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async addStar(req, res, next) {
    try {
      let data = await AliensService.addStar(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removeStar(req, res, next) {
    try {
      let data = await AliensService.removeStar(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async addPlanet(req, res, next) {
    try {
      let data = await AliensService.addPlanet(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removePlanet(req, res, next) {
    try {
      let data = await AliensService.removePlanet(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async addMoon(req, res, next) {
    try {
      let data = await AliensService.addMoon(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removeMoon(req, res, next) {
    try {
      let data = await AliensService.removeMoon(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await AliensService.delete(req.params.id);
      res.send("Item Deleted");
    } catch (error) {
      next(error);
    }
  }
}
