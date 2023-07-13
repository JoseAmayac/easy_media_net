import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Easy Media Net Api',
      version: '1.0.0',
      description: 'Social NetWork API',
    },
    tags: [
      {
        name: 'Auth',
        description: 'Endpoints de autenticación',
      },
      {
        name: 'Posts',
        description: 'Endpoints de posts',
      },
    ],
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [
    './src/modules/auth/routes/*.ts',
    './src/modules/posts/routes/*.ts',
  ],
};

const specs = swaggerJsdoc(options);

export default (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};