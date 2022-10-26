import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import type { Relation } from "typeorm";
import { PostEntity } from "../post/post.entity";
import { UserEntity } from "../user/user.entity";

@Entity("comments")
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: Relation<UserEntity>;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: Relation<PostEntity>;

  //   @ManyToOne((type) => Comment, (comment) => comment.children)
  //   parent: Comment

  //   @OneToMany((type) => Comment, (comment) => comment.parent)
  //   children: Comment[]
}
