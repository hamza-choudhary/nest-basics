import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `the id is type of ${typeof id}`;
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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
