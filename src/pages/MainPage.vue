<script setup lang="ts">
import PromoSection from "@/assets/blocks/sections/PromoSection.vue";
import AreasActivitySection from "@/assets/blocks/sections/AreasActivitySection.vue";
import TheseArePeopleSection from "@/assets/blocks/sections/TheseArePeopleSection.vue";
// import TopManagersSection from '@/assets/blocks/sections/TopManagersSection.vue'
import FooterSection from "@/assets/blocks/sections/FooterSection.vue";
import { onMounted, ref, onUnmounted } from "vue";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isLoading = ref(true);
let lenis: Lenis | null = null;

const initSmoothScroll = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  });

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

onMounted(() => {
  const handleLoad = () => {
    setTimeout(() => {
      isLoading.value = false;

      setTimeout(() => {
        initSmoothScroll();
      }, 100);
    }, 500);
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }
});

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <div v-if="isLoading"></div>

  <div v-else data-scroll-container>
    <PromoSection />
    <AreasActivitySection />
    <TheseArePeopleSection />
    <FooterSection />
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;
</style>
