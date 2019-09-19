export interface IUser {
  name: string;
  wont_eat: string[];
  drinks: string[];
}

export interface IUpdateUser extends IUser {
  isSelected?: boolean;
}

interface IAvoid {
  user: string;
  avoidFood: boolean;
  avoidDrinks: boolean;
}

export interface IVenue {
  name: string;
  food: string[];
  drinks: string[];
  avoid?: IAvoid | object;
}

export interface ISystemState {
  users: IUpdateUser[];
  venues: IVenue[];
}
