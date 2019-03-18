import { Injectable } from '@nestjs/common';
import { Message } from './entity/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from './dto/message-dto';

@Injectable()
export class MessageService {
    constructor (
        @InjectRepository(Message) 
        private readonly messageRepository: Repository<Message>,
    ) {}
    async getAll(){
        return await this.messageRepository.find(); 
    }
    async createMessage(newMessage:MessageDto){
        const _objMessage = new Message();
        _objMessage.message = newMessage.message;
        _objMessage.nick = newMessage.nick;
        return await this.messageRepository.save(_objMessage);
    }
    async updateMessage(idMessage: number,updateMessage: MessageDto){
        const _objMessage = await this.messageRepository.findOne(idMessage);
        _objMessage.message = updateMessage.message;
        _objMessage.nick = updateMessage.nick;
        return await this.messageRepository.save(_objMessage);
    }
    async deleteMessage(idMessage:number){
        return await this.messageRepository.delete(idMessage);
    }
}
