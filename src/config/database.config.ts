import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getDatabaseConfig = (): MongooseModuleOptions => {
  const username = process.env.DATABASE_USER;
  const password = process.env.DATABASE_PASS;
  const host = process.env.DATABASE_HOST || 'localhost';
  const port = process.env.DATABASE_PORT || '27017';
  const database = process.env.DATABASE_NAME;

  if (!username || !password || !database) {
    throw new Error(
      'Missing required MongoDB credentials: DATABASE_USER, DATABASE_PASS, DATABASE_NAME',
    );
  }

  const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;

  return {
    uri,
    connectionFactory: (connection) => {
      connection.on('connected', () => {
        console.log('MongoDB is connected');
      });
      connection.on('error', (error) => {
        console.error('MongoDB connection error:', error);
      });
      connection.on('disconnected', () => {
        console.log('MongoDB is disconnected');
      });A
      return connection;
    },
  };
};
