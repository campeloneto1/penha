export type User = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone1: string;
  telefone2: string;
  foto: string;
  cep: string;
  rua: string;
  numero: string;
  bairro_id: string;
  bairro: Object;
  perfil_id: string;
  perfil: Object;
  password: string;
};

export type Users = Array<User>;
