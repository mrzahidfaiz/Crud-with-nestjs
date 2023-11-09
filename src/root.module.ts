import { Module } from '@nestjs/common';
import { BookModule } from './controllers/book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
