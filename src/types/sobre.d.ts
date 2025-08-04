export interface Sobre {
  nome: string;
  pessoal: {
    idade: number;
    cidade: string;
    estado: string;
  };
  profissional: {
    cargo: string;
    habilidades: string[];
    tecnologias: string[];
  };
  descricao: string;
}
