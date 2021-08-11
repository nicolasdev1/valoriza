import {
   Column,
   Entity,
   PrimaryColumn,
   CreateDateColumn,
   UpdateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Expose } from 'class-transformer'

import { tableNames } from '../constants'

@Entity(tableNames.TAGS)
class Tag {

   @PrimaryColumn()
   readonly id: string

   @Column()
   name: string

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

   constructor() {
      if (!this.id) this.id = uuidv4()
   }

   @Expose({ name: 'custom_name' })
   customName(): string {
      return `#${this.name}`
   }

}

export default Tag
