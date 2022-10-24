import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "../comment/comment.entity";
import { Post } from "../post/post.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column()
  // age: number;
  // @OneToMany(
  //   () => Post,
  //   post => post.userPosts
  // )
  // publishedPosts: Post[];

  // @OneToMany(
  //   () => Comment,
  //   comment => comment.userComments
  // )
  // comments: Comment[];
}
