import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@EntityRepository(UserEntity)
export class userRepository extends Repository<UserEntity> {}
