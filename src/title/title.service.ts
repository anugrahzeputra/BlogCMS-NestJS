import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { Title } from './entities/title.entity';

@Injectable()
export class TitleService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @InjectRepository(Title) private titleRepository: Repository<Title>,
  ) {}

  create(createTitleDto: CreateTitleDto) {
    return this.titleRepository.save(createTitleDto);
  }

  findAll() {
    return this.titleRepository.find();
  }

  findOne(id: number) {
    return this.titleRepository.findOne(id);
  }

  update(id: number, updateTitleDto: UpdateTitleDto) {
    this.titleRepository.update(id, updateTitleDto);
    return updateTitleDto;
  }

  remove(id: number) {
    if (!this.findOne(id)) {
      return `id didn't found`;
    } else {
      return `This action removes a #${id} title`;
    }
  }
}
