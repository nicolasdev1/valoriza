import {
   Table,
   QueryRunner,
   MigrationInterface
} from 'typeorm'

import { tableNames } from '../../constants'

class CreateTags1628360201313 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
               name: tableNames.TAGS,
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
      await queryRunner.dropTable(tableNames.TAGS)
   }

}

export { CreateTags1628360201313 }
