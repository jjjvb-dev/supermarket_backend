import { Module } from '@nestjs/common';
import { CuentasController } from './cuentas.controller';
import { CuentasService } from './cuentas.service';
import { DatabaseModule } from '@database';


@Module({
    imports: [DatabaseModule],
    controllers: [CuentasController],
    providers: [CuentasService],
    exports: [CuentasService]
})
export class CuentasModule {}