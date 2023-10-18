import { Bairro } from "./Bairro";
import { Orgao } from "./Orgao";

export type Unidade = {
  id: number;
  nome: string;
  abreviatura: string;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: number;
  bairro: Bairro;
  orgao_id: number;
  orgao: Orgao;
};

export type Unidades = Array<Unidade>;
