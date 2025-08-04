<template>
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; {{ new Date().getFullYear() }} Robert Iver. Todos os direitos reservados.</p>
      <div class="social">
        <a :href="contatoData.github" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a :href="contatoData.linkedin" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="`mailto:${contatoData.email}`" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contato as contatoData } from "@/data/contato";
</script>

<style scoped>
.footer {
  background-color: var(--preto);
  color: var(--branco);
  padding: 2rem 0;
  border-top: 1px solid var(--cinza-claro);
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social a {
  color: var(--branco);
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social a:hover {
  color: var(--dourado);
}
</style>
