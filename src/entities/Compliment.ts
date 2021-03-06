import {
   Column,
   Entity,
   ManyToOne,
   JoinColumn,
   PrimaryColumn,
   CreateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

import Tag from './Tag'
import User from './User'
import { tableNames } from '../constants'

@Entity(tableNames.COMPLIMENTS)
class Compliment {

   @PrimaryColumn()
   readonly id: string

   @Column()
   user_sender: string

   @JoinColumn({ name: 'user_sender' })
   @ManyToOne(_ => User)
   userSender: User

   @Column()
   user_receiver: string

   @JoinColumn({ name: 'user_receiver' })
   @ManyToOne(_ => User)
   userReceiver: User

   @Column()
   tag_id: string

   @JoinColumn({ name: 'tag_id' })
   @ManyToOne(_ => Tag)
   tag: Tag

   @Column()
   message: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuidv4()
   }

}

export default Compliment
