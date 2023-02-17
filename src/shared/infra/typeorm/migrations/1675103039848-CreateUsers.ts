import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1675103039848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "username",
            type: "string",
            isUnique: true,
          },
          {
            name: "password",
            type: "string",
          },
          {
            name: "email",
            type: "string",
          },
          {
            name: "driver_license",
            type: "string",
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
