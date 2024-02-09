import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dorama } from './entities/dorama.entity';
import { CreateDoramaDTO } from './dto/create-dorama.dto';

@Injectable()
export class DoramasService {
  doramas: Dorama[] = [
    {
      id: '1',
      name: 'Doraminha',
      origin: 'Korea',
      episodes: 8,
    },
  ];

  findAll(): Dorama[] {
    const dorama = this.doramas;
    if (!dorama.length)
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return dorama;
  }

  findOne(id: string): Dorama {
    const dorama = this.doramas.find((dorama) => dorama.id === id);
    if (!dorama) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return dorama;
  }

  create(createDoramaDTO: CreateDoramaDTO): Dorama {
    const dorama: Dorama = {
      id: new Date().getTime().toString(),
      ...createDoramaDTO,
    };

    this.doramas.push(dorama);
    return dorama;
  }

  update(id: string, body: CreateDoramaDTO): Dorama {
    const index = this.doramas.findIndex((dorama) => dorama.id === id);
    if (index < 0)
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    this.doramas[index] = { ...this.doramas[index], ...body };
    return this.doramas[index];
  }

  remove(id: string): void {
    const index = this.doramas.findIndex((dorama) => dorama.id === id);
    if (index < 0)
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    this.doramas.splice(index, 1);
  }
}
