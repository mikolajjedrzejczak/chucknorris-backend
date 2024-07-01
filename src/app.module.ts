import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [AuthModule, JokeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
