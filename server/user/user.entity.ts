import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity {
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
