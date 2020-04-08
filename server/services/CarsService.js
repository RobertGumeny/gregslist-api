import { dbContext } from "../db/DbContext";

class CarsService {
  async getAll() {
    let cars = await dbContext.Cars.find();
    return cars;
  }
  async getOne(carId) {
    let foundCar = await dbContext.Cars.findById(carId);
    return foundCar;
  }
  async create(body) {
    let car = await dbContext.Cars.create(body);
    return car;
  }
  async delete(carId) {
    await dbContext.Cars.findByIdAndDelete(carId);
  }
}

export const carsService = new CarsService();
