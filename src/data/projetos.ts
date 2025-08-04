import type { Projeto } from "../types/projetos";

export const projetos: Projeto[] = [
  {
    titulo: "SISCO – Sistema de Gestão de Obras",
    descricao:
      "Sistema desenvolvido para a Agiltec e cliente Equatorial, voltado à gestão de obras. Atuei como desenvolvedor Fullstack, responsável pelo desenvolvimento de funcionalidades e publicação no servidor.",
    stack: ["Vue 3", "C#", ".NET", "PostgreSQL"]
  },
  {
    titulo: "AGROSOFT – Estufas Inteligentes",
    descricao:
      "Sistema de controle de estufas agrícolas com integração a aplicativo mobile. Fui responsável pela autenticação de usuários, CRUDs de sensores e atuadores e integração backend. Projeto integrador aceito na SECITEX.",
    stack: ["Angular", "Node.js", "MongoDB"]
  },
  {
    titulo: "NIC – Núcleo de Inovação Tecnológica",
    descricao:
      "Sistema para gerenciar demandas institucionais no IFCANG. Atuei no desenvolvimento backend e manutenção por 1 ano. Projeto aceito na SECITEX.",
    stack: ["Python", "Django", "MySQL"]
  }
];
