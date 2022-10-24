import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Post } from "../post/post.entity";
// import { User } from "../user/user.entity";

@Entity()
export class Comment {
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

  //   @ManyToOne(
  //     () => User,
  //     user => user.id
  //   )
  //   userComments: User;

  @ManyToOne(
    () => Post,
    post => post.id
  )
  postComments: Post;

  //   @ManyToOne((type) => Comment, (comment) => comment.children)
  //   parent: Comment

  //   @OneToMany((type) => Comment, (comment) => comment.parent)
  //   children: Comment[]
}
