import express from "express";
import BaseController from "../utils/BaseController";
import { homesService } from "../services/HomesService";
import { dbContext } from "../db/DbContext";

export class HomesController extends BaseController {
  constructor() {
    super("api/homes");
    this.router
      .get("", this.getAll)
      .get("/:carId", this.getOne)
      .post("", this.create)
      .delete("/:carId", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let homes = await homesService.getAll();
      res.send({
        data: homes,
        message: "This is where the homes live, come get one!",
      });
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      let foundHome = await homesService.getOne(req.params.homeId);
      if (!foundHome) {
        return res.status(400).send("Invalid ID");
      }
      res.send(foundHome);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let home = await homesService.create(req.body);
      res.send({ data: home, message: "home created!" });
    } catch (err) {
      next(err);
    }
  }
  async delete(req, res, next) {
    try {
      await homesService.delete(req.params.homeId);
      res.send("Deleted");
    } catch (err) {
      next(err);
    }
  }
}
