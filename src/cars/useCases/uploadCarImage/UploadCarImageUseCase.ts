// import { ICarsRepository } from "src/cars/repositories/ICarsRepository"

// export class UploadCarImageUseCase {
//   constructor(
//     private carsRepository: ICarsRepository,
//     private carsImagesRepository: ICarsImagesRepository,
//     private storageProvider: IStorageProvider,
//   ) {}

//   async execute({ car_id, images_name }: IRequest): Promise<void> {
//     images_name.map(async image => {
//       await this.carsImagesRepository.create(car_id, image)

//       await this.storageProvider.save(image, "cars")
//     })
//   }
// }
