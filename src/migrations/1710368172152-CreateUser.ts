import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1710368172152 implements MigrationInterface {
    name = 'CreateUser1710368172152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
