import {
   MigrationInterface,
   QueryRunner,
   TableColumn,
   TableForeignKey
} from 'typeorm'

import { tableNames } from '../../constants'

class AddUserReceiverToCompliments1628390007138 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
         tableNames.COMPLIMENTS,
         new TableColumn({
            name: 'user_receiver',
            type: 'uuid',
            isNullable: true
         })
      )

      await queryRunner.createForeignKey(
         tableNames.COMPLIMENTS,
         new TableForeignKey({
            name: 'ComplimentsUserReceiver',
            columnNames: ['user_receiver'],
            referencedTableName: tableNames.USERS,
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL'
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey(tableNames.COMPLIMENTS, 'ComplimentsUserReceiver')

      await queryRunner.dropColumn(tableNames.COMPLIMENTS, 'user_receiver')
   }

}

export { AddUserReceiverToCompliments1628390007138 }
