export type Perfil = {
  id: number;
  nome: string;

  administrador: boolean;
  gestor: boolean;
  relatorios: boolean;

  agressores: boolean;
  agressores_cad: boolean;
  agressores_edt: boolean;
  agressores_del: boolean;

  denuncias: boolean;
  denuncias_cad: boolean;
  denuncias_edt: boolean;
  denuncias_del: boolean;

  emergencias: boolean;
  emergencias_cad: boolean;
  emergencias_edt: boolean;
  emergencias_del: boolean;

  usuarios: boolean;
  usuarios_cad: boolean;
  usuarios_edt: boolean;
  usuarios_del: boolean;
};

export type Perfis = Array<Perfil>;
