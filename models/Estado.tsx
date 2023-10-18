import { Pais } from "./Pais";

export type Estado = {
  id: number;
  nome: string;
  abreviatura: string;
  pais_id: number;
  pais: Pais;
};

export type Estados = Array<Estado>;
