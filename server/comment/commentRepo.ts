import { EntityRepository, Repository } from "typeorm";
import { Comment } from "./comment.entity";

@EntityRepository(Comment)
export class commentRepository extends Repository<Comment> {}
