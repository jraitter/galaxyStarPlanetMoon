import express from "express";
import StarService from "../services/StarService.js";

export default class StarsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await StarService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await StarService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // create is a post
  async create(req, res, next) {
    try {
      let data = await StarService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  // edit is a put
  async edit(req, res, next) {
    try {
      let data = await StarService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await StarService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}
