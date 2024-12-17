import { Module } from '@nestjs/common';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseModule } from './warehouse/warehouse.module';




@Module({
  imports: [ 
    AdminModule, 
    UserModule, 
    AuthModule, WarehouseModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
