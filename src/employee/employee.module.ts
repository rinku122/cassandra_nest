import { Module } from '@nestjs/common';
import { CassandraModule } from 'src/cassandra/cassandra.module';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';

@Module({
  imports: [CassandraModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
  exports: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
