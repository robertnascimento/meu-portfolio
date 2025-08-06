<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>

<template>
  <div class="wave-wrapper" :style="{ color: color || 'var(--vermelho-escuro)' }">
    <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path fill="currentColor">
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M0,120L60,80C120,40,240,160,360,140C480,120,600,60,720,80C840,100,960,180,1080,160C1200,140,1320,80,1380,100L1440,120V0H0Z;
            M0,140L60,100C120,60,240,180,360,160C480,140,600,80,720,100C840,120,960,200,1080,180C1200,160,1320,100,1380,120L1440,140V0H0Z;
            M0,120L60,80C120,40,240,160,360,140C480,120,600,60,720,80C840,100,960,180,1080,160C1200,140,1320,80,1380,100L1440,120V0H0Z
          "
        />
      </path>
    </svg>
  </div>
</template>

<style scoped>
.wave-wrapper {
  color: var(--vermelho-escuro);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  line-height: 0;
  z-index: -1;
}

.wave-wrapper svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
