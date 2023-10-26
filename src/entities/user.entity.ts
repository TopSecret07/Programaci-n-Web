import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RolEntity } from "./rol.entity";



@Entity('user', { schema: 'ventas' })

export class UserEntity {

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

    @OneToOne(() => RolEntity, rol => rol.user)
    @JoinColumn()
    rol: RolEntity;
    
    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'user name'
    })
    name: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: false,
        comment: 'user lastname'
    })
    lastname: string;

    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'email user'
    })
    email: string;


}