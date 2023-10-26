import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, ManyToOne } from "typeorm";
import { AutorEntity } from "./autor";


@Entity('products', { schema: 'ventas' })

export class BookEntity {

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
        comment: 'book name'
    })
    name: string;

    @Column('varchar', {
        name: 'descripcion',
        nullable: false,
        comment: 'user descripcion'
    })
    descripcion: string;

    @ManyToOne(() => AutorEntity, autor => autor.books)
    autor: AutorEntity[];

}