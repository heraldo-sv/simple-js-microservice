import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { MessageDto } from './dto/message-dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService:MessageService){}
    @Post()
    create (@Body() createMessageDTO: MessageDto, @Res() _response){
        this.messageService.createMessage(createMessageDTO)
            .then(msg => {
                _response.status(HttpStatus.CREATED).json(msg);
            })
            .catch( () => {
                _response.status(HttpStatus.FORBIDDEN).json({message:'Error en la creación del mensaje.'});
            });
    }
    @Get()
    getAll (@Res() _response){
        this.messageService.getAll()
            .then(list => {
                _response.status(HttpStatus.OK).json(list);
            }).catch( () => {
                _response.status(HttpStatus.FORBIDDEN).json({message:'Error en la obtención del listado de mensajes.'});
            });
    }
    @Put(':id')
    update (@Body() updateMessageDto: MessageDto, @Param('id') idMessage, @Res() _response){
        this.messageService.updateMessage(idMessage,updateMessageDto)
            .then(msg => {
                _response.status(HttpStatus.OK).json(msg);
            })
            .catch( () => {
                _response.status(HttpStatus.FORBIDDEN).json({message:'Error en la edición del mensaje.'});
            });
    }
    @Delete(':id')
    delete (@Param('id') idMessage, @Res() _response){
        this.messageService.deleteMessage(idMessage)
            .then(msg => {
                _response.status(HttpStatus.OK).json(msg);
            })
            .catch( () => {
                _response.status(HttpStatus.FORBIDDEN).json({message:'Error en la eliminación del mensaje.'});
            });
    }
}
