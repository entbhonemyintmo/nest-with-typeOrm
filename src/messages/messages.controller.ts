import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageDto } from './message.dto';

@Controller('messages')
@ApiTags('Messages')
export class MessagesController {
  @Get()
  list_messages() {
    return 'Hi There!';
  }

  @Post()
  create_message(@Body() body: MessageDto) {
    console.log(body);
  }

  @Get('/:id')
  get_message(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
  }
}
