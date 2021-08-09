import {
   MigrationInterface,
   QueryRunner,
   Table
} from 'typeorm'

import { tableNames } from '../../constants'

class CreateUsers1627389461218 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: tableNames.USERS,
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true
               },
               {
                  name: 'name',
                  type: 'varchar'
               },
               {
                  name: 'email',
                  type: 'varchar'
               },
               {
                  name: 'admin',
                  type: 'boolean',
                  default: false
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()'
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()'
               }
            ]
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(tableNames.USERS)
   }

}

export { CreateUsers1627389461218 }
