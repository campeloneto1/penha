import { Cidade } from "./Cidade";

export type Bairro = {
  id: number;
  nome: string;
  abreviatura: string;
  cidade_id: number;
  cidade: Cidade;
};

export type Bairros = Array<Bairro>;
