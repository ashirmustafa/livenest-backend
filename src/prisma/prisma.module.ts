
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 makes it available across app without re-import
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
