import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('products', { schema: 'ventas' })

export class AutorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    CreateAt: Date;

    @UpdateDateColumn({
        name: 'update_At',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    UpdateDateColumn: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'autor name'
    })
    name: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: false,
        comment: 'autor lastname'
    })
    lastname: string;

    @ManyToMany(() => BookEntity, book => book.autor)
    @JoinTable()
    books: BookEntity[];

}