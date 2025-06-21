import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('LiveNest API')
    .setDescription('Blog API docs')
    .setVersion('1.0')
    .addBearerAuth() // JWT support in Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // URL: /api/docs

  await app.listen(3000);
}
bootstrap();
