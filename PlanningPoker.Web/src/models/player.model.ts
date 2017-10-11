export class Player {
    id: number;
    gameId: number;
    name: string;
    isActive: boolean;
    addedDate: Date;
    modifiedDate: Date;
  };

  export class PlayerApiResult {
      player: Player;
      errorMessage : string;
  }

  export class GetPlayerApiResult {
    players: Player[];
    errorMessage : string;
}