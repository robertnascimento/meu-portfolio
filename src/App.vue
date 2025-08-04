<template>
  <div id="app">
    <Cabecalho />

    <main>
      <Sobre />
      <Projetos />
      <Contato />
    </main>

    <Barra />
  </div>
</template>

<script setup lang="ts">
import Cabecalho from "@/components/layout/Header.vue";
import Barra from "@/components/layout/Footer.vue";


import Sobre from "@/components/sections/Sobre.vue";
import Projetos from "@/components/sections/Projetos.vue";
import Contato from "@/components/sections/Contato.vue";
</script>

<style>
/* Pode deixar vazio ou incluir ajustes globais */
</style>
