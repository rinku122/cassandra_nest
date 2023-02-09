import { Module } from '@nestjs/common';
import { CassandraModule } from './cassandra/cassandra.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [CassandraModule, EmployeeModule],
})
export class AppModule {}
