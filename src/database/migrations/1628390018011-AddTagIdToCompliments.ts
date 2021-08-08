import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

import { tableNames } from '../../constants'

class AddTagIdToCompliments1628390018011 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
         tableNames.COMPLIMENTS,
         new TableColumn({
            name: 'tag_id',
            type: 'uuid',
            isNullable: true
         })
      )

      await queryRunner.createForeignKey(
         tableNames.COMPLIMENTS,
         new TableForeignKey({
            name: 'ComplimentsTagId',
            columnNames: ['tag_id'],
            referencedTableName: tableNames.TAGS,
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL'
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey(tableNames.COMPLIMENTS, 'ComplimentsTagId')

      await queryRunner.dropColumn(tableNames.COMPLIMENTS, 'tag_id')
   }
}

export { AddTagIdToCompliments1628390018011 }
