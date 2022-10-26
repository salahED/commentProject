import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import type { Relation } from "typeorm";
import { CommentEntity } from "../comment/comment.entity";
import { PostEntity } from "../post/post.entity";

@Entity("users")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => PostEntity, (post) => post.user)
  publishedPosts: Relation<PostEntity[]>;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: Relation<CommentEntity[]>;
}
