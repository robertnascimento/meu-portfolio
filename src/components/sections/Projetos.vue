<script setup lang="ts">
import { ref } from "vue";
import { projetos } from "@/data/projetos";
import WaveBackground from "@/components/common/WaveBackground.vue";

const flippedCards = ref<boolean[]>(projetos.map(() => false));

function flipCard(index: number) {
  flippedCards.value[index] = !flippedCards.value[index];
}
</script>

<template>
  <section id="projetos" class="section">
    <WaveBackground />
    <div class="container">
      <h2 class="section-title">
        <span class="text-title">PROJETOS</span>
      </h2>
      <div class="grid-projetos">
        <div v-for="(projeto, index) in projetos" :key="projeto.titulo" class="card-wrapper">
          <div class="card" :class="{ flipped: flippedCards[index] }">
            <!-- Frente -->
            <div class="card-face card-front">
              <img :src="projeto.imagem" alt="Imagem do projeto" class="card-image" />
              <div class="card-content">
                <h3 class="titulo">{{ projeto.titulo }}</h3>
                <p class="subtitulo">{{ projeto.subtitulo }}</p>
                <button class="botao-detalhes" @click="flipCard(index)">
                  Detalhes
                </button>
              </div>
            </div>

            <!-- Verso -->
            <div class="card-face card-back">
              <div class="card-back-content">
                <h3>{{ projeto.title_descricao }}</h3>
                <p class="descricao">{{ projeto.descricao }}</p>
                <p class="stack">
                  <strong>Stack:</strong> {{ projeto.stack.join(", ") }}
                </p>
                <button class="botao-detalhes" @click="flipCard(index)">
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  position: relative;
  padding: 4rem 0;
  background-color: var(--dourado);
  color: var(--branco);
}

.container {
  padding: 2rem;
  z-index: 0;
}

.section-title {
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  color: var(--vermelho-escuro);
  margin-bottom: 1.5rem;
}

.text-title {
  margin-top: 1.8rem;
  color: var(--branco);
  font-weight: 600;
  text-decoration: underline;
}

.grid-projetos {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.card-wrapper {
  perspective: 1500px;
}

.card {
  width: 100%;
  height: 26rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--branco);
  border: 1px solid var(--cinza-claro);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 1.25rem;
  color: var(--branco);
}

.card-front {
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}

.card-back-content {
  color: var(--vermelho-escuro);
  display: flex;
    display: flex;
  justify-content: space-around;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
}

.card-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.botao-detalhes {
  margin-top: 1rem;
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background-color: var(--vermelho-escuro);
  color: var(--branco);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-detalhes:hover {
  background-color: #7a1313;
}

.titulo {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vermelho-escuro);
  text-decoration: underline;
}

.subtitulo {
  font-size: 1.2rem;
  color: var(--vermelho-escuro);
}

.descricao {
  font-size: 1rem;
}

.stack {
  font-size: 0.875rem;
  color: var(--vermelho-escuro);
}
</style>
