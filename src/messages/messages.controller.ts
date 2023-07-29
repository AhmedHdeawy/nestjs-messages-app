import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor() {
        this.messagesService = new MessagesService()
    }
    
    @Get()
    listAllMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get(':id')
    getOneMessage(@Param() id: string) {
        return this.messagesService.findOne(id)
    }
}