import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn
} from "typeorm";
import { CommentEntity } from "../comment/comment.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)"
  })
  public updatedAt: Date;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_entity", referencedColumnName: "id" })
  userId: UserEntity;

  @OneToMany(
    () => CommentEntity,
    comment => comment.postId
  )
  comments: CommentEntity[];
}
