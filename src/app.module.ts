// import { ItemsModule } from './items/items.module'
// import { Module } from '@nestjs/common'
// import { DatabaseModule } from './database/database.module'
// import { ConfigModule } from '@nestjs/config'

// @Module({
// 	imports: [
// 		ConfigModule.forRoot({ isGlobal: true }),
// 		DatabaseModule,
// 		ItemsModule,
// 	],
// 	controllers: [],
// 	providers: [],
// })
// export class AppModule {}

import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { GetTypeOrmConfig } from 'src/config/getTypeOrmConfig'
import { BankAccountModule } from './bank-account/bank-account.module'
import { SavingModule } from './saving/saving.module'
import { InvoiceModule } from './invoice/invoice.module'
import { TransactionModule } from './transaction/transaction.module'
// import { MediaModule } from './media/media.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		GetTypeOrmConfig,
		UserModule,
		AuthModule,
		BankAccountModule,
		SavingModule,
		InvoiceModule,
		TransactionModule,
		// MediaModule,
		// При необходимости импортируйте сюда другие модули, связанные с аутентификацией.
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

// import { Module } from '@nestjs/common'
// import { UserModule } from './user/user.module'
// import { ConfigModule, ConfigService } from '@nestjs/config'
// import { AuthModule } from './auth/auth.module'
// import { BankAccountModule } from './bank-account/bank-account.module'
// import { SavingModule } from './saving/saving.module'
// import { InvoiceModule } from './invoice/invoice.module'
// import { TransactionModule } from './transaction/transaction.module'
// import { getTypeOrmConfig_1 } from './config/typeorm.config'
// import { TypeOrmModule } from '@nestjs/typeorm'
// // import { MediaModule } from './media/media.module';

// @Module({
// 	imports: [
// 		ConfigModule.forRoot(),
// 		TypeOrmModule.forRootAsync({
// 			imports: [ConfigModule],
// 			inject: [ConfigService],
// 			useFactory: getTypeOrmConfig_1,
// 		}),

// 		UserModule,
// 		AuthModule,
// 		BankAccountModule,
// 		SavingModule,
// 		InvoiceModule,
// 		TransactionModule,
// 	],
// 	controllers: [],
// 	providers: [],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { UserModule } from './user/user.module'
// import { ConfigModule, ConfigService } from '@nestjs/config'
// import { AuthModule } from './auth/auth.module'

// @Module({
// 	imports: [
// 		ConfigModule.forRoot({ isGlobal: true }),
// 		TypeOrmModule.forRootAsync({
// 			imports: [ConfigModule],
// 			useFactory: (configService: ConfigService) => ({
// 				type: 'postgres',
// 				host: configService.get('DB_HOST'),
// 				port: configService.get('DB_PORT'),
// 				username: configService.get('DB_USERNAME'),
// 				password: configService.get('DB_PASSWORD'),
// 				database: configService.get('DB_NAME'),
// 				logging: configService.get('IS_PROD') === 'false',
// 				synchronize: true, // В разработке, в производстве установлено значение false
// 				entities: [__dirname + '/**/*.entity{.js, .ts}'],
// 			}),
// 			inject: [ConfigService],
// 		}),
// 		UserModule,
// 		AuthModule,
// 		// При необходимости импортируйте сюда другие модули, связанные с аутентификацией.
// 	],
// 	controllers: [],
// 	providers: [],
// })
// export class AppModule {}
