<script setup lang="ts">
import LogoVasIcon from "../icons/LogoVasIcon.vue";
import LogoUI from "../ui/LogoUI.vue";

const goToAreas = () => {
  const target = document.getElementById("areas_activity_section");
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <section id="promo_section">
    <video
      autoplay
      muted
      loop
      playsinline
      class="video_background"
      src="/promo_video_preview.mp4"
    />
    <div class="video_mask" />

    <div class="container">
      <div class="inner">
        <header id="header_block">
          <LogoUI />
        </header>

        <div class="content">
          <div class="heading_block">
            <div class="top">
              <LogoVasIcon />
              <h1 class="heading">Технологии<br />Связь<br />Победа</h1>
            </div>

            <div class="description_block">
              <p class="text">
                Технопарк Военной академии связи - это инновационная площадка, где сливаются воедино
                наука, технологии и творчество. Это пространство возможностей для талантливых
                курсантов, кадетов и операторов научной роты ВАС, где они осваивают новые
                компетенции, создают прорывные проекты и воплощают идеи в реальные продукты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="scroll_down" aria-label="Прокрутить вниз" @click="goToAreas">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </section>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;

#promo_section {
  position: relative;
  height: 100vh;

  .video_background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .video_mask {
    position: absolute;
    inset: 0;
    background: myColor("black");
    opacity: 0.05;
    z-index: 2;
  }

  .container {
    position: relative;
    z-index: 3;

    > .inner {
      display: flex;
      min-height: 100dvh;
      padding-block: 20px 50px;
      justify-content: space-between;
      align-items: end;
      position: relative;
    }
  }

  .scroll_down {
    position: absolute;
    right: 10px;
    bottom: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    transition:
      background 0.3s ease,
      transform 0.3s ease;
    animation: bounce 2s infinite;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: scale(1.1);
    }

    @include from(tablet) {
      right: 40px;
      bottom: 40px;
      width: 52px;
      height: 52px;
    }
  }

  .content {
    display: flex;
    width: 100%;
    color: #fff;

    .heading_block {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }

    .top {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .heading {
      margin: 0;
      font-weight: 700;
      line-height: 0.95;
      text-transform: uppercase;

      @include from(mobile) {
        font-size: 4.8rem;
        letter-spacing: -3px;
      }

      @include from(tablet) {
        font-size: 5.6rem;
        letter-spacing: -4px;
      }
    }

    .description_block {
      max-width: 500px;
      margin-top: 40px;

      @include from(laptop) {
        margin: 0;
      }

      .text {
        margin: 0;
        font-size: 1.4rem;
        line-height: 1.5;
        backdrop-filter: blur(10px);
        padding: 12px 20px;
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        &:hover::after {
          left: 100%;
        }
      }

      @include from(tablet) {
        max-width: 800px;

        .text {
          font-size: 1.8rem;
        }
      }

      @include from(laptop) {
        max-width: 800px;
      }
    }
  }
}

@include from(tablet) {
  #promo_section .content .heading_block {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 24px 40px;
  }

  #promo_section .content .top {
    flex-shrink: 0;
  }

  #promo_section .content .description_block {
    flex: 1 1 400px;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}
</style>
