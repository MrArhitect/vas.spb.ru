<script setup lang="ts">
interface IProps {
  h?: string;
}

withDefaults(defineProps<IProps>(), {
  h: "215px",
});
</script>

<template>
  <div class="svg_container">
    <svg
      :height="h"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1011.00 215.00"
      data-guides='{"vertical":[],"horizontal":[]}'
    >
      <path
        fill="transparent"
        stroke="#ffffff"
        fill-opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        id="tSvgdf9019cb2"
        title="Path 2"
        d="M1 214C1 214 355 214 355 214C355 214 500 1 500 1C500 1 1010 1 1010 1"
      ></path>
      <defs></defs>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;
</style>
