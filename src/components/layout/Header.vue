<template>
  <header class="header">
    <nav class="container nav">
      <h1 class="logo">Robert Iver</h1>
      <ul class="nav-list">
        <li v-for="link in links" :key="link.id">
          <a @click.prevent="scrollToSection(link.id)" href="#">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavLink {
  id: string;
  label: string;
}

const links: NavLink[] = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" }
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.header {
  background-color: var(--preto);
  color: var(--branco);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--cinza-claro);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: var(--vermelho-escuro);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-list a {
  color: var(--branco);
  transition: color 0.3s;
}

.nav-list a:hover {
  color: var(--dourado);
}
</style>
