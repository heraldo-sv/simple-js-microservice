import { MessageDto } from './message-dto';

describe('CreateMessageDto', () => {
  it('should be defined', () => {
    expect(new MessageDto()).toBeDefined();
  });
});
