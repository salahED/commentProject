import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  BaseEntity
} from "typeorm";
import { PostEntity } from "../post/post.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

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

  @ManyToOne(
    () => UserEntity,
    user => user.id
  )
  userId: UserEntity;

  @ManyToOne(
    () => PostEntity,
    post => post.id
  )
  postId: PostEntity;

  //   @ManyToOne((type) => Comment, (comment) => comment.children)
  //   parent: Comment

  //   @OneToMany((type) => Comment, (comment) => comment.parent)
  //   children: Comment[]
}
