import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetModule } from './tweet/tweet.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    SeguindoModule,
    TweetModule,
    SeguidoresModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
