import { config } from 'dotenv';
import { DataSource } from 'typeorm';
const env = process.env.NODE_ENV || 'development';

config({
  path: `.env.${env}`,
});

export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.DBPORT || '5432'),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities:['src/**/*.entity.ts'],
  migrations:['src/database/migrations/*.ts']
});
