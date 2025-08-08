import type { Projeto } from "../types/projetos";

export const projetos: Projeto[] = [
  {
    titulo: "SISCO",
    subtitulo: "Sistema de Gestão de Obras",
    imagem: "/img/projetos/3.png",
    title_descricao:
      "Sistema desenvolvido para a Agiltec e cliente Equatorial, voltado à gestão de obras.",
    descricao:
      "Atuo como desenvolvedor Fullstack, sendo responsável pela implementação de novas funcionalidades, manutenção do sistema e publicação em ambiente de produção.",
    stack: ["Vue 3", "C#", ".NET", "PostgreSQL"],
  },
  {
    titulo: "AGROSOFT",
    subtitulo: "Estufas Inteligentes",
    imagem: "/img/projetos/1.png",
    title_descricao:
      "Sistema de controle de estufas agrícolas com integração a aplicativo mobile.",
    descricao:
      "Desenvolvi funcionalidades essenciais do sistema, incluindo autenticação de usuários, CRUDs de sensores e atuadores, além da integração entre frontend e backend. Projeto integrador aprovado na SECITEX.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    titulo: "NIC",
    subtitulo: "Núcleo de Inovação Tecnológica",
    imagem: "/img/projetos/2.png",
    title_descricao:
      "Sistema para gerenciar demandas institucionais no IFCANG.",
    descricao:
      "Atuei no desenvolvimento backend do projeto, com foco na implementação de funcionalidades e na manutenção da estrutura dos models do banco de dados. O projeto foi reconhecido e aprovado na SECITEX.",
    stack: ["Python", "Django", "MySQL"],
  },
];
