import { Module } from '@nestjs/common';
import { PlannersService } from './service/planners.service';
import { PlannersController } from './controller/planners.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Planner, PlannerSchema } from './schema/planner.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Planner.name,
    schema: PlannerSchema
  }])],
  providers: [PlannersService],
  controllers: [PlannersController]
})
export class PlannersModule {}
