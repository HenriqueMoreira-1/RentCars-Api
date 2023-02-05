import { hash } from "bcrypt"
import { dataSource } from ".."
import { v4 as uuidv4 } from "uuid"

async function create() {
  const connection = await dataSource.initialize()

  const id = uuidv4()

  const password = await hash("admin", 8)

  await connection.query(
    `INSERT INTO USERS(id, name, username , email, password, "isAdmin", driver_license, created_at)
    values('${id}', 'admin', 'admin','admin@admin.com', '${password}', true, '000123', ${new Date().getTime()})
    `,
  )

  await connection.destroy()
}

create().then(() => console.log("User admin created"))
