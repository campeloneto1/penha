import { Agressor } from "./Agressor";
import { Bairro } from "./Bairro";
import { User } from "./User";

export type Denuncia = {
  id: number;
  tipo: number;
  vitima: string;
  user_id: number;
  user: User;
  agressor: Agressor;
  agressor_id: number;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: number;
  bairro: Bairro;
  narrativa: string;
};

export type Denuncias = Array<Denuncia>;
