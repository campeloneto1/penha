import { Bairro } from "./Bairro";
import { Unidade } from "./Unidade";

export type Subunidade = {
  id: number;
  nome: string;
  abreviatura: string;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: number;
  bairro: Bairro;
  unidade_id: number;
  unidade: Unidade;
};

export type Subunidades = Array<Subunidade>;
