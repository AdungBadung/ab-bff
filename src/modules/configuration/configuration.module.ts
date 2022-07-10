import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

const kNodeEnvDev = 'dev';
const kNodeEnvTest = 'test';
const kNodeEnvProd = 'prod';

const getEnvFile = () => {
  switch (process.env.NODE_ENV) {
    case kNodeEnvDev:
      return '.dev.env';
    case kNodeEnvTest:
      return '.test.env';
    case kNodeEnvProd:
      return '.prod.env';
    default:
      console.log('NODE_ENV is not defined');
  }
  return '.prod.env';
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: getEnvFile(),
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(kNodeEnvDev, kNodeEnvTest, kNodeEnvProd)
          .required(),
        NODE_PORT: Joi.number().required(),

        MONGODB_URL: Joi.string().required(),
        MONGODB_DBNAME: Joi.string().required(),
        MONGODB_USER: Joi.string().required(),
        MONGODB_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
