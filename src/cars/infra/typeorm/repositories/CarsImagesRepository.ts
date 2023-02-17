import { dataSource } from "@shared/infra/typeorm"
import { ICarsImagesRepository } from "src/cars/repositories/ICarsImageRepository"
import { CarImage } from "../entities/carImage"
import { Repository } from "typeorm"

export class carsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>

  constructor() {
    this.repository = dataSource.getRepository(CarImage)
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    })

    await this.repository.save(carImage)

    return carImage
  }
}
