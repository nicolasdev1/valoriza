import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

import { tableNames } from '../../constants'

class AddPasswordToUsers1628373814943 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
         tableNames.USERS,
         new TableColumn({
            name: 'password',
            type: 'varchar'
         })
      )
   }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(tableNames.USERS, 'password')
  }
}

export { AddPasswordToUsers1628373814943 }
