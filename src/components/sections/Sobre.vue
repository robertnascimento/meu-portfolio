<script setup lang="ts">
import { sobre } from "@/data/sobre";

const dados = sobre;
</script>
<template>
  <section id="sobre" class="section" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">Sobre Mim</h2>
      <p class="descricao">{{ dados.descricao }}</p>

      <div class="info-pessoal">
        <p><strong>Nome:</strong> {{ dados.nome }}</p>
        <p><strong>Idade:</strong> {{ dados.pessoal.idade }}</p>
        <p><strong>Cidade:</strong> {{ dados.pessoal.cidade }}, {{ dados.pessoal.estado }}</p>
      </div>

      <div class="info-trabalho">
        <p><strong>Cargo:</strong> {{ dados.profissional.cargo }}</p>
        <p><strong>Habilidades:</strong> {{ dados.profissional.habilidades.join(", ") }}</p>
        <p><strong>Tecnologias:</strong> {{ dados.profissional.tecnologias.join(", ") }}</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.section {
  padding: 4rem 0;
  color: var(--branco);
}

.section-title {
  font-size: 2rem;
  color: var(--vermelho-escuro);
  margin-bottom: 1rem;
}

.descricao {
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.info-pessoal p,
.info-trabalho p {
  margin: 0.3rem 0;
}
</style>
