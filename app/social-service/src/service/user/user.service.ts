import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/model/DTO/user.dto';
import { User } from 'src/model/schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto) {
        
    }

    async findOne(usernameOrEmail: string): Promise<User| undefined> {
        return this.userModel.findOne({
            $or: [
              { username: usernameOrEmail },
              { email: usernameOrEmail }
            ]
          });
    }
}
