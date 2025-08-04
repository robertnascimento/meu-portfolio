<template>
  <section id="projetos" class="section" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">Projetos</h2>
      <div class="grid-projetos">
        <div v-for="projeto in projetos" :key="projeto.titulo" class="card-projeto">
          <h3 class="titulo">{{ projeto.titulo }}</h3>
          <p class="descricao">{{ projeto.descricao }}</p>
          <p class="stack"><strong>Stack:</strong> {{ projeto.stack.join(", ") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projetos } from "@/data/projetos";
</script>

<style scoped>
.section {
  padding: 4rem 0;
  color: var(--branco);
}

.section-title {
  font-size: 2rem;
  color: var(--vermelho-escuro);
  margin-bottom: 1.5rem;
}

.grid-projetos {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.card-projeto {
  background-color: var(--preto);
  border: 1px solid var(--cinza-claro);
  padding: 1.25rem;
  border-radius: 8px;
  transition: box-shadow 0.3s;
}

.card-projeto:hover {
  box-shadow: 0 0 10px var(--vermelho-escuro);
}

.titulo {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vermelho-escuro);
}

.descricao {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.stack {
  font-size: 0.875rem;
  color: var(--cinza-claro);
}
</style>
