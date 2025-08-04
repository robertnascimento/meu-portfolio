<template>
  <section id="contato" class="section" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">Contato</h2>

      <form
        action="https://formspree.io/f/seu-endpoint"
        method="POST"
        class="form-contato"
      >
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="name" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required />

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="message" rows="5" required></textarea>

        <button type="submit" class="botao-enviar">Enviar</button>
      </form>

      <div class="contatos-adicionais">
        <p><strong>Email:</strong> <a :href="`mailto:${dados.email}`">{{ dados.email }}</a></p>
        <p><strong>Telefone:</strong> {{ dados.telefone || "Não disponível" }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contato } from "@/data/contato";

const dados = contato;
</script>

<style scoped>
.section {
  padding: 4rem 0;
  color: var(--branco);
}

.section-title {
  font-size: 2rem;
  color: var(--vermelho-escuro);
  margin-bottom: 2rem;
}

.form-contato {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 480px;
}

label {
  font-weight: 600;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid var(--cinza-claro);
  border-radius: 4px;
  background-color: var(--preto);
  color: var(--branco);
}

input:focus,
textarea:focus {
  outline: 2px solid var(--vermelho-escuro);
}

.botao-enviar {
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: var(--vermelho-escuro);
  color: var(--branco);
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-enviar:hover {
  background-color: #7a1313;
}

.contatos-adicionais {
  margin-top: 2rem;
  font-size: 0.9rem;
}

.contatos-adicionais a {
  color: var(--dourado);
  text-decoration: underline;
}
</style>
