import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {}
    
    @Get()
    listAllMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get(':id')
    async getOneMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)

        if (!message) {
            throw new NotFoundException(`the message with the id ${id} doesn't exist`)
        }

        return message
    }
}
