import "reflect-metadata"
import "dotenv/config"
import { app } from "./app"
import { dataSource } from "../typeorm"

dataSource
  .initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started at port ${process.env.PORT}! 🏆`)
    })
  })
  .catch(err => {
    console.error("Error during Data Source initialization", err)
  })
