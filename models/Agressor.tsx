import { Bairro } from "./Bairro";

export type Agressor = {
  id: number;
  nome: string;
  cpf: string;
  foto: string;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: number;
  bairro: Bairro;
};

export type Agressores = Array<Agressor>;
