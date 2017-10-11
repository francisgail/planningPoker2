export class UserStory {
    id: number;
    shortOverview: string;
    title: string;
    addedDate: Date;
    modifiedDate: Date;
  };

  export class UserStoryApiResult {
      game : UserStory;
      errorMessage : string;
  };