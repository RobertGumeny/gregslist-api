import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";
import { dbContext } from "../db/DbContext";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getAll)
      .get("/:jobId", this.getOne)
      .post("", this.create)
      .delete("/:jobId", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let jobs = await jobsService.getAll();
      res.send({
        data: jobs,
        message: "This is where the jobs live, come get one!",
      });
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      let foundJob = await jobsService.getOne(req.params.jobId);
      if (!foundJob) {
        return res.status(400).send("Invalid ID");
      }
      res.send(foundJob);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let job = await jobsService.create(req.body);
      res.send({ data: job, message: "job created!" });
    } catch (err) {
      next(err);
    }
  }
  async delete(req, res, next) {
    try {
      await jobsService.delete(req.params.jobId);
      res.send("Deleted");
    } catch (err) {
      next(err);
    }
  }
}
