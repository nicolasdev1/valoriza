import {
   Column,
   CreateDateColumn,
   Entity,
   PrimaryColumn,
   UpdateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

import { tableNames } from '../constants'

@Entity(tableNames.USERS)
class User {

   @PrimaryColumn()
   readonly id: string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   password: string

   @Column()
   admin: boolean

   @CreateDateColumn()
   readonly created_at: Date

   @UpdateDateColumn()
   updated_at: Date

   constructor() {
      if (!this.id) this.id = uuidv4()
   }

}

export default User
