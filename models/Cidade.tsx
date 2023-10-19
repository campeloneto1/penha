import { Estado } from "./Estado";

export type Cidade = {
  id: number;
  nome: string;
  abreviatura: string;
  estado_id: number;
  estado: Estado;
  label: string;
  value: any;
  key: any;
};

export type Cidades = Array<Cidade>;
