<script setup lang="ts">
import { projetos } from "@/data/projetos";
import WaveBackground from "@/components/common/WaveBackground.vue";
</script>

<template>
  <section id="projetos" class="section" data-aos="fade-up">
    <WaveBackground />
    <div class="container">
      <h2 class="section-title"><span style="color: var(--vermelho-escuro); font-weight: 600; text-decoration: underline;">PROJETOS</span></h2>
      <div class="grid-projetos">
        <div v-for="projeto in projetos" :key="projeto.titulo" class="card-projeto">
          <div>
            <h3 class="titulo">{{ projeto.titulo }}</h3>
            <p class="subtitulo">{{ projeto.subtitulo }}</p>
          </div>
          <div>
            <p class="title_descricao">{{ projeto.title_descricao }}</p>
            <p class="descricao">{{ projeto.descricao }}</p>
            <p class="stack"><strong>Stack:</strong> {{ projeto.stack.join(", ") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<style scoped>
.container { 
  padding: 2rem;
  z-index: 4;
}

.section {
  position: relative;
  padding: 4rem 0;
  color: var(--branco);
  background-color: var(--dourado);
}

.section-title {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: var(--vermelho);
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
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card-projeto:hover {
  box-shadow: 0 0 10px var(--vermelho);
}

.titulo {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vermelho);
  text-decoration: underline;
}

.subtitulo {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--vermelho);
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
