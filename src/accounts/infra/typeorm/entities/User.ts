import { CreateDateColumn, PrimaryColumn, Column, Entity } from "typeorm"
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

  @Column({ default: false })
  isAdmin: boolean

  @Column({ nullable: true })
  avatar: string

  @CreateDateColumn()
  created_at: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
