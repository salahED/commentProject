import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Comment } from "../comment/comment.entity";
// import { User } from "../user/user.entity";

@Entity()
export class Post {
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

  //   @ManyToOne(
  //     () => User,
  //     user => user.id
  //   )
  //   userPosts: User;

  @OneToMany(
    () => Comment,
    comment => comment.postComments
  )
  comments: Comment[];
}
