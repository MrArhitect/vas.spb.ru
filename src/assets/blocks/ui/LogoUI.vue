<script setup lang="ts">
import TechnoparkIcon from "../icons/TechnoparkIcon.vue";

const scrollToTop = (e: Event) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <RouterLink class="logo" to="/" @click="scrollToTop">
    <TechnoparkIcon w="24px" />
    <span>Технопарк Вас</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.logo {
  position: fixed;
  top: 20px;
  left: 50%;
  translate: -50% 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  padding: 3px 10px;
  border: 1px solid myColor("white");
  border-radius: 35px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  transition: scale 0.2s ease;

  @media (hover: hover) {
    &:hover {
      scale: 1.15;
    }
  }

  &:active {
    scale: 1.3;
  }

  @media (width <= 768px) {
    top: 10px;
    padding-block: 2px;
    padding-inline: 8px;

    @media (width <= 480px) {
      padding-inline: 6px;
    }
  }
}

span {
  font:
    1.4rem "DrukTextWideCyTT",
    Arial,
    Helvetica,
    sans-serif;
  text-transform: uppercase;
  letter-spacing: -1px;
  white-space: nowrap;

  @include from(tablet) {
    font-size: 1.7rem;
  }

  @media (width <= 768px) {
    font-size: 1rem;
  }

  @media (width <= 600px) {
    font-size: 0.85rem;
  }
}
</style>
