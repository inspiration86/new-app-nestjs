import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ProductModule,
  MongooseModule.forRoot('mongodb://localhost/NestDB',{useNewUrlParser:true}),
  JwtModule.register({ secret: 'hard!to-guess_secret' })  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
