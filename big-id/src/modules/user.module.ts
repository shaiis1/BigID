import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { UserController } from 'src/controllers/user.controller';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ]
  // controllers and providers
})
export class UserModule {}