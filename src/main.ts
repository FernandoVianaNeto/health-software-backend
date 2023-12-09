import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '1mb' }));
  app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      `frame-src 'none'; object-src 'none'; script-src 'self'; style-src 'self';`,
    );
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
    );
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Permissions-Policy', '');
    next();
  });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Gas Station - API')
    .setDescription('Gas Station - API')
    .setExternalDoc('Download JSON', '/docs-json')
    .addBearerAuth(
      {
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .addBearerAuth(
      {
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'app',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000, () => console.log('NEST SERVER SUCCESSFULLY STARTED'));
}
bootstrap();
