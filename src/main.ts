import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';

function middleWare( req: Request, res: Response, next: NextFunction){
  console.log('global Middleware may have multiple middlewares');
  next();
}

function middleWareAgain( req: Request, res: Response, next: NextFunction){
  console.log('global Middleware may have multiple middlewares Again and Again');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(middleWare);
  app.use(middleWareAgain)
  await app.listen(3000);
}
bootstrap();
