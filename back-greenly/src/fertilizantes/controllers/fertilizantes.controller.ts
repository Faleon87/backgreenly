import { Controller, Get } from '@nestjs/common';
import { FertilizantesService } from '../services/fertilizantes.service';
import { Fertilizantes } from '../entities/fertilizantes';


@Controller('fertilizantes')
export class FertilizantesController {

    constructor(
        private fertilizantesService: FertilizantesService
    ) { }

    @Get('cards')
    findAll(): Promise<Fertilizantes[]> {
        return this.fertilizantesService.findAll();
    }



}
