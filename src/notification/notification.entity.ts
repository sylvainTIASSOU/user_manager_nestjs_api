import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  public idNotif: number;

  @Column({ type: 'varchar' })
  public heure: number;

  @Column({ type: 'varchar' })
  public minute: number;

  @Column({ type: 'varchar' })
  public mode: string;

  @ManyToOne(() => UserEntity, (user) => user.notifications)
  public user: UserEntity;
}
