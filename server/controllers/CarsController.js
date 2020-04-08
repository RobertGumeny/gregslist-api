import express from "express";
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";
import { dbContext } from "../db/DbContext";

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
  async getOne(req, res, next) {
    try {
      let foundCar = await carsService.getOne(req.params.carId);
      if (!foundCar) {
        return res.status(400).send("Invalid ID");
      }
      res.send(foundCar);
    } catch (error) {
      next(error);
    }
  }
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
      await carsService.delete(req.params.carId);
      res.send("Deleted");
    } catch (err) {
      next(err);
    }
  }
}
