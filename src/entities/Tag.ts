import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

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
}

export default Tag
