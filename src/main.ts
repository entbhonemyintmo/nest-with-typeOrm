import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Nestjs With TypeORM')
    .setDescription(
      'This is my nestjs study project using TypeORM instead of Prisma',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(8001);
}
bootstrap();
