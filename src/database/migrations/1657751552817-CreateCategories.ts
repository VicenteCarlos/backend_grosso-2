import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1657751552817 implements MigrationInterface {
  //caso queira subir a migration, função up abaixo é pra isso
  public async up(queryRunner: QueryRunner): Promise<void> {
    //criação de tabelas abaixo:
    //pra cada coluna, abre-se um objeto dentro de um array, veja abaixo
    await queryRunner.createTable(
      new Table({
        name: "categories", //nome da tabela nessa linha
        columns: [
          {
            name: "id", //nome da coluna nessa linha
            type: "uuid",
            isPrimary: true, //definindo chave primaria nessa linha
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()", //valor padrão nessa
          },
        ],
      })
    );
  }

  //caso queira desfazer a migration, função down é pra isso
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
