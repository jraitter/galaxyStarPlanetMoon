import express from "express";
import GalaxyService from "../services/GalaxyService.js";
import StarService from "../services/StarService.js";

export default class GalaxiesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await GalaxyService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await GalaxyService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getStarByGalaxyId(req, res, next) {
    try {
      let data = await StarService.getByGalaxyId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // create is a post
  async create(req, res, next) {
    try {
      let data = await GalaxyService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  // edit is a put
  async edit(req, res, next) {
    try {
      let data = await GalaxyService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await GalaxyService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}
