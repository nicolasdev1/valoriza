import {
   TableColumn,
   QueryRunner,
   TableForeignKey,
   MigrationInterface
} from 'typeorm'

import { tableNames } from '../../constants'

class AddUserSenderToCompliments1628389997196 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
         tableNames.COMPLIMENTS,
         new TableColumn({
            name: 'user_sender',
            type: 'uuid',
            isNullable: true
         })
      )

      await queryRunner.createForeignKey(
         tableNames.COMPLIMENTS,
         new TableForeignKey({
            name: 'ComplimentsUserSender',
            columnNames: ['user_sender'],
            referencedTableName: tableNames.USERS,
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL'
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey(tableNames.COMPLIMENTS, 'ComplimentsUserSender')

      await queryRunner.dropColumn(tableNames.COMPLIMENTS, 'user_sender')
   }

}

export { AddUserSenderToCompliments1628389997196 }
