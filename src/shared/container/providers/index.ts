import { container } from "tsyringe"
import { DayJsDateProvider } from "./DateProvider/Implementations/DayJsDateProvider"
import { IDateProvider } from "./DateProvider/IDateProvider"

container.registerSingleton<IDateProvider>("DayJsDateProvider", DayJsDateProvider)
