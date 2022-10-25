import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { CommentEntity } from "../comment/comment.entity";
import { PostEntity } from "../post/post.entity";

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
  @OneToMany(
    () => PostEntity,
    post => post.userId
  )
  publishedPosts: PostEntity[];

  @OneToMany(
    () => CommentEntity,
    comment => comment.userId
  )
  comments: CommentEntity[];
}
