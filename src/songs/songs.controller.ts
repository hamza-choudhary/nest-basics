import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll(): string[] {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a single song';
  }

  @Post()
  create(): string[] {
    return this.songsService.create('Chain smokers');
  }

  @Put(':id')
  update(): string {
    return 'This action updates a song';
  }

  @Delete(':id')
  delete(): string {
    return 'This action removes a song';
  }
}
