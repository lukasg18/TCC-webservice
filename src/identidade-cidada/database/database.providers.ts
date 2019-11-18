import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      database: process.env.DB_NAME ||  'identiade-cidada-v2',
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '123456',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      dropSchema:false,
      synchronize:false
    }),
  },
];