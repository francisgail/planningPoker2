export class Game {
    Id: number;
    Tag: string;
    Moderator: string;
    AddedDate: Date;
    ModifiedDate: Date;
    GameProgress: number;
  };

  export class GameApiResult {
      data : Game;
      errorMessage : string;
  };