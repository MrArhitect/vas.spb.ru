<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const mySection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const checkVisibility = (): void => {
  if (!mySection.value) return;
  const rect = mySection.value.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && !isVisible.value) isVisible.value = true;
};

onMounted(() => {
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkVisibility);
});
</script>

<template>
  <div class="page_wrapper">
    <section id="areas_activity_section">
      <div class="content">
        <div class="hard_bg">
          <div class="inner">
            <img
              class="bg-image top-left"
              src="/images/areas_of_activity_bg.webp"
              alt=""
              loading="lazy"
            />
            <img
              class="bg-image center"
              src="/images/areas_of_activity_bg.webp"
              alt=""
              loading="lazy"
            />
            <img
              class="bg-image bottom-right"
              src="/images/areas_of_activity_bg.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div class="container">
          <div class="animated-section" ref="mySection" :class="{ visible: isVisible }">
            <div class="section__heading">
              <h2 class="heading">Направления деятельности</h2>
            </div>
          </div>

          <div class="mobile_area inner">
            <ul class="areas_list">
              <div class="row">
                <li class="areas_item">
                  <button class="areas_btn">Технологии искусственного интеллекта</button>
                </li>
              </div>
              <div class="row">
                <li class="areas_item">
                  <button class="areas_btn">
                    Технологии виртуальной и дополнительной реальности
                  </button>
                </li>
              </div>
              <div class="row">
                <li class="areas_item"><button class="areas_btn">GameDev</button></li>
                <li class="areas_item"><button class="areas_btn">WEB-разработка</button></li>
              </div>
              <div class="row">
                <li class="areas_item">
                  <button class="areas_btn">Компьютерная графика и компьютерный дизайн</button>
                </li>
              </div>
              <div class="row">
                <li class="areas_item">
                  <button class="areas_btn">Разработка программного обеспечения</button>
                </li>
              </div>
              <div class="row">
                <li class="areas_item"><button class="areas_btn">Аддитивные технологии</button></li>
                <li class="areas_item"><button class="areas_btn">Системы радиосвязи</button></li>
              </div>
              <div class="row">
                <li class="areas_item"><button class="areas_btn">Квантовые технологии</button></li>
                <li class="areas_item"><button class="areas_btn">Reverse engineering</button></li>
              </div>
              <div class="row">
                <li class="areas_item">
                  <button class="areas_btn">Информационная безопасность</button>
                </li>
              </div>
            </ul>
          </div>

          <div class="animated-section" ref="mySection" :class="{ visible: isVisible }">
            <div class="main_area inner">
              <ul class="areas_list">
                <li class="areas_item">
                  <button class="areas_btn">Информационная безопасность</button>
                </li>
                <li class="areas_item">
                  <button class="areas_btn">Технологии искусственного интеллекта</button>
                </li>
                <li class="areas_item"><button class="areas_btn">Квантовые технологии</button></li>
                <li class="areas_item">
                  <button class="areas_btn">
                    Технологии виртуальной и дополнительной реальности
                  </button>
                </li>
                <li class="areas_item"><button class="areas_btn">GameDev</button></li>
                <li class="areas_item"><button class="areas_btn">WEB-разработка</button></li>
                <li class="areas_item">
                  <button class="areas_btn">Компьютерная графика и компьютерный дизайн</button>
                </li>
                <li class="areas_item">
                  <button class="areas_btn">Разработка программного обеспечения</button>
                </li>
                <li class="areas_item"><button class="areas_btn">Аддитивные технологии</button></li>
                <li class="areas_item"><button class="areas_btn">Системы радиосвязи</button></li>
                <li class="areas_item"><button class="areas_btn">Reverse engineering</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;

#areas_activity_section {
  overflow: hidden;
  position: relative;
  box-shadow: 0px -20px 8px black;
  z-index: 2;

  .content {
    position: relative;
    padding: 30px 0px;

    @include from(tablet) {
      padding: 35px 0px;
    }

    @include from(laptop) {
      padding: 60px 0px 60px;
    }
  }
}

.hard_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    will-change: transform;

    .bg-image {
      position: absolute;
      transition: all 0.3s ease;
      object-fit: contain;
      pointer-events: none;
    }

    .top-left {
      top: -10px;
      left: -10px;
      transform: rotate(15deg);
      width: min(300px, 25dvw);
      height: auto;
      transform-origin: top left;

      @include from(mobile) {
        width: min(150px, 30dvw);
        top: -30px;
        left: -30px;
      }

      @include from(tablet) {
        width: min(200px, 25dvw);
        top: -10px;
        left: -10px;
      }

      @include from(laptop) {
        width: min(250px, 20dvw);
        top: -5px;
        left: -5px;
      }

      @include from(desktop) {
        width: min(350px, 15dvw);
        top: -5px;
        left: -5px;
      }
    }

    .center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      rotate: -14deg;
      width: min(300px, 85dvw);
      height: auto;

      @include from(mobile) {
        width: min(350px, 70dvw);
      }

      @include from(tablet) {
        width: min(450px, 65dvw);
        rotate: -4deg;
      }

      @include from(laptop) {
        width: min(500px, 55dvw);
      }

      @include from(desktop) {
        width: min(550px, 50dvw);
      }
    }

    .bottom-right {
      bottom: 0;
      right: 0;
      width: min(350px, 28dvw);
      height: auto;
      transform: rotate(-15deg);
      transform-origin: bottom right;

      @include from(mobile) {
        width: min(200px, 35dvw);
        bottom: -40px;
        right: -40px;
      }

      @include from(tablet) {
        width: min(250px, 30dvw);
      }

      @include from(laptop) {
        width: min(300px, 25dvw);
      }

      @include from(desktop) {
        width: min(350px, 15dvw);
      }
    }
  }
}

.container {
  position: relative;
  z-index: 2;

  h2.heading {
    padding: 0px 0px 10px;

    @include from(mobile) {
      padding: 15px 0px;
      font-size: 2.6rem;
    }

    @include from(tablet) {
      font-size: 2.8rem;
      padding: 25px 0px;
    }
  }

  .mobile_area .areas_list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .row {
      display: flex;
      gap: 10px;
      width: 100%;

      .areas_item {
        flex: 1 1 auto;
        min-width: 0;

        &:only-child {
          flex: 1 1 100%;
        }
      }
    }

    @include from(mobile) {
      display: none;
    }
  }

  .areas_btn {
    width: 100%;
    display: flex;
    align-items: end;
    text-align: left;
    min-height: 70px;
    padding: 10px 12px;
    border: 1.5px solid myColor("white");
    border-radius: 20px;
    font-family: "DrukTextWideCyTT", Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    line-height: 1.2;
    backdrop-filter: blur(12px);
    background-color: rgba(0, 0, 0, 0.4);
    color: myColor("white");
    cursor: pointer;
    transition: all 0.3s ease;

    @include from(mobile) {
      min-height: 100px;
      font-size: 1.5rem;
    }

    @include from(tablet) {
      min-height: 150px;
      font-size: 1.8rem;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  }

  .main_area .areas_list {
    display: none;

    @include from(mobile) {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
}
</style>
