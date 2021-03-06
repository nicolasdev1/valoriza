import {
   Table,
   QueryRunner,
   MigrationInterface
} from 'typeorm'

import { tableNames } from '../../constants'

class CreateCompliments1628389235511 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: tableNames.COMPLIMENTS,
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true
               },
               {
                  name: 'message',
                  type: 'varchar'
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()'
               }
            ]
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(tableNames.COMPLIMENTS)
   }

}

export { CreateCompliments1628389235511 }
