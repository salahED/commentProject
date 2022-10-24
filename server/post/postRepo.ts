import { EntityRepository, Repository } from "typeorm";
import { Post } from "./post.entity";

@EntityRepository(Post)
export class postRepository extends Repository<Post> {}
