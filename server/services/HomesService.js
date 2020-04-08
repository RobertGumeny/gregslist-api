import { dbContext } from "../db/DbContext";

class HomesService {
  async getAll() {
    let homes = await dbContext.Homes.find();
    return homes;
  }
  async getOne(homeId) {
    let foundHome = await dbContext.Homes.findById(homeId);
    return foundHome;
  }
  async create(body) {
    let home = await dbContext.Homes.create(body);
    return home;
  }
  async delete(homeId) {
    await dbContext.Homes.findByIdAndDelete(homeId);
  }
}

export const homesService = new HomesService();
