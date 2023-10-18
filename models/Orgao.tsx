import { Bairro } from "./Bairro";

export type Orgao = {
  id: number;
  nome: string;
  abreviatura: string;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: number;
  bairro: Bairro;
};

export type Orgaos = Array<Orgao>;
