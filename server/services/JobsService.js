import { dbContext } from "../db/DbContext";

class JobsService {
  async getAll() {
    let jobs = await dbContext.Jobs.find();
    return jobs;
  }
  async getOne(jobId) {
    let foundJob = await dbContext.Jobs.findById(jobId);
    return foundJob;
  }
  async create(body) {
    let job = await dbContext.Jobs.create(body);
    return job;
  }
  async delete(jobId) {
    await dbContext.Jobs.findByIdAndDelete(jobId);
  }
}

export const jobsService = new JobsService();
