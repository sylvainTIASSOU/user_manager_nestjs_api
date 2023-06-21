import { NotificationEntity } from 'src/notification/notification.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 255 })
  public firstName: string;

  @Column({ type: 'varchar', length: 255 })
  public lastName: string;

  @Column({ type: 'integer' })
  public age: number;

  @OneToMany(() => NotificationEntity, (notification) => notification.user)
  notifications: NotificationEntity[];
}
