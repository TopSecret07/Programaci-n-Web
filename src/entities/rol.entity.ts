import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('role', { schema: 'ventas' })

export class RolEntity {

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
        name: 'rol',
        nullable: false,
        comment: 'rol name'
    })
    rol: string;

    @OneToOne(() => UserEntity, user => user.rol)
    user: UserEntity;

}