import { CreateDateColumn, Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  driver_license: string

  @Column()
  created_at: string

  @CreateDateColumn()
  isAdmin: boolean

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
