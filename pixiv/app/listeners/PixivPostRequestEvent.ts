import { ListenerEvent } from './ListenerEvent';

export interface PixivPostRequestEvent extends ListenerEvent {
  data: {
    postId: string;
    quality: 'original' | 'regular';
  };
}
