import type { Projeto } from "../types/projetos";

export const projetos: Projeto[] = [
  {
    titulo: "SISCO",
    subtitulo: "Sistema de Gestão de Obras",
    title_descricao:
      "Sistema desenvolvido para a Agiltec e cliente Equatorial, voltado à gestão de obras.",
    descricao:
      "Atuei como desenvolvedor Fullstack, responsável pelo desenvolvimento de funcionalidades e publicação no servidor.",
    stack: ["Vue 3", "C#", ".NET", "PostgreSQL"],
  },
  {
    titulo: "AGROSOFT",
    subtitulo: "Estufas Inteligentes",
    title_descricao:
      "Sistema de controle de estufas agrícolas com integração a aplicativo mobile.",
    descricao:
      "Fui responsável pela autenticação de usuários, CRUDs de sensores e atuadores e integração backend. Projeto integrador aceito na SECITEX.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    titulo: "NIC",
    subtitulo: "Núcleo de Inovação Tecnológica",
    title_descricao:
      "Sistema para gerenciar demandas institucionais no IFCANG.",
    descricao:
      "Atuei no desenvolvimento backend e manutenção por 1 ano. Projeto aceito na SECITEX.",
    stack: ["Python", "Django", "MySQL"],
  },
];
