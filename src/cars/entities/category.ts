import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn"
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn"
import { Entity } from "typeorm/decorator/entity/Entity"
import { v4 as uuidV4 } from "uuid"

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id?: string

  @PrimaryColumn()
  name: string

  @PrimaryColumn()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
