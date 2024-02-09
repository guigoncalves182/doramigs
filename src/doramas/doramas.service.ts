import { Injectable } from '@nestjs/common';
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
    return this.doramas;
  }

  findOne(id: string): Dorama {
    return this.doramas.find((dorama) => dorama.id === id);
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
    this.doramas[index] = { ...this.doramas[index], ...body };
    return this.doramas[index];
  }

  remove(id: string): void {
    const index = this.doramas.findIndex((dorama) => dorama.id === id);
    this.doramas.splice(index, 1);
  }
}
