import { User } from "./User";

export type Emergencia = {
  id: number;
  user_id: number;
  user: User;
  data_hora: Date;
  lat: string;
  lng: string;
};

export type Emergencias = Array<Emergencia>;
