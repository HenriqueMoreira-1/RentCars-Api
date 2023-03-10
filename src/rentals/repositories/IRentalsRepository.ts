import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO"
import { Rental } from "../infra/typeorm/entities/rental"

export interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>
  findOpenRentalByUser(user_id: string): Promise<Rental>
  create(data: ICreateRentalDTO): Promise<Rental>
}
