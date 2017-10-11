import { Player } from './player.model';

export class CardCall {
    id: number;
    playerId: number;
    userStoryId: number;
    cardValue: boolean;
    addedDate: Date;
    modifiedDate: Date;
  };

  export class PlayerCard {
    player: Player;
    card : CardCall;
}

export class GetPlayerCardResult{
    playerCards: PlayerCard[];
    errorMessage: string;
}