import { dbContext } from "../db/DbContext";

class CarsService {
  async getAll() {
    let cars = await dbContext.Cars.find();
    return cars;
  }
  async create(body) {
    let car = await dbContext.Cars.create(body);
    return car;
  }
}

export const carsService = new CarsService();
