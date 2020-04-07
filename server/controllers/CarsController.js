import express from "express";
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:carId", this.getOne)
      .post("", this.create)
      .delete("/:carId", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let cars = await carsService.getAll();
      res.send({
        data: cars,
        message: "This is where the cars live, come get one!",
      });
    } catch (error) {
      next(error);
    }
  }
  getOne() {}
  async create(req, res, next) {
    try {
      let car = await carsService.create(req.body);
      res.send({ data: car, message: "car created!" });
    } catch (err) {
      next(err);
    }
  }
  async delete(req, res, next) {
    try {
      let car = await carsService.delete(req.body);
      res.send({ data: car, message: "car deleted!" });
    } catch (err) {
      next(err);
    }
  }
}
