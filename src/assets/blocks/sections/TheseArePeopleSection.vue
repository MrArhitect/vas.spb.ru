<script setup lang="ts">
import { ref, onMounted } from "vue";

const numMen = ref(0);
let animated = false;

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateNumber(0, 200, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  const target = document.querySelector(".max_command .num_men");
  if (target) observer.observe(target);
});

const animateNumber = (start: number, end: number, duration: number) => {
  const startTime = performance.now();

  const updateNumber = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(start + (end - start) * progress);

    numMen.value = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };

  requestAnimationFrame(updateNumber);
};
</script>

<template>
  <div class="page_wrapper">
    <section id="these_are_people_section">
      <div class="inner">
        <div class="marquee" style="margin-bottom: 50px">
          <div class="marquee_content">
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
          </div>
        </div>
        <div class="max_command">
          <div class="content">
            <div class="hard_bg">
              <div class="inner">
                <img
                  class="bg-image top-left"
                  loading="lazy"
                  src="/images/atom_img_two.webp"
                  alt="Нет названия"
                />
                <img
                  class="bg-image bottom_left"
                  loading="lazy"
                  src="/images/atom_img.webp"
                  alt="Нет названия"
                />
                <img
                  class="bg-image bottom-right"
                  loading="lazy"
                  src="/images/atom_img_two.webp"
                  alt="Нет названия"
                />
              </div>
            </div>
            <div class="container">
              <div class="inner">
                <div class="left">
                  <div class="num_men">{{ numMen }}</div>
                </div>
                <div class="right">
                  <div class="right_inner">
                    <div class="text_men">человек</div>
                    <div class="text">
                      кадетов, курсантов, операторов научной роты, офицеров, преподавателей, ученых,
                      профессоров
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="marquee" style="margin-bottom: 64px">
          <div class="marquee_content">
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
            <span>Технопарк - этолюди</span>
          </div>
        </div>
        <div class="date_foundation">
          <div class="container">
            <div class="inner">
              <div class="left">
                <div class="text">основан в</div>
                <div class="year">2024</div>
                <div class="svg_container">
                  <svg class="oval" viewBox="0 0 120 200" fill="none">
                    <ellipse
                      fill="transparent"
                      stroke="#ffffff"
                      stroke-width="2"
                      cx="60"
                      cy="100"
                      rx="50"
                      ry="90"
                      transform="rotate(45 60 100)"
                    />
                  </svg>
                </div>
              </div>
              <div class="right">
                <div class="text">
                  Технопарк соединил курсантские научно-исследовательские лаборатории кафедр и
                  научно-исследовательского центра, научную роту и другие научно-производственные
                  объединения.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;

#these_are_people_section {
  margin: 65px 0px;
  overflow: hidden;

  .date_foundation {
    margin-bottom: 50px;

    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .left {
        position: relative;
        width: 200px;
        height: 200px;

        .text {
          position: absolute;
          top: 60px;
          font-size: 2rem;
        }

        .year {
          position: absolute;
          top: 70px;
          font-size: 4.9rem;
          font-family: "DrukTextWideCyTT", Arial, Helvetica, sans-serif;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .svg_container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          z-index: -1;

          .oval {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }

      .right {
        font-size: 1.4rem;
        max-width: 550px;
        margin-left: 25px;

        @include from(tablet) {
          font-size: 1.6rem;
        }
      }
    }
  }

  .max_command {
    position: relative;
    margin-bottom: 30px;
    margin-top: 150px;

    @include from(mobile) {
      margin-top: 0px;
    }

    .container {
      height: 564px;
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;

      @include from(tablet) {
        height: 960px;
      }

      .inner {
        display: flex;
        max-width: 300px;
        justify-content: left;
        flex-wrap: wrap;
        align-items: center;
        height: max-content;

        @include from(tablet) {
          max-width: 100%;
        }

        .left {
          margin-right: 40px;

          .num_men {
            font-size: 9.1rem;
            font-family: "DrukTextWideCyTT", Arial, Helvetica, sans-serif;
            color: myColor("white");
            line-height: 0.7;
            font-weight: bold;

            @include from(tablet) {
              font-size: 15rem;
            }
          }
        }

        .right {
          .right_inner {
            display: flex;
            flex-direction: column;

            .text_men {
              width: max-content;
              font-size: 4.7rem;
              font-family: "DrukTextWideCyTT", Arial, Helvetica, sans-serif;
              color: myColor("white");
              margin-bottom: 5px;
            }

            .text {
              max-width: 350px;
              font-size: 1.5rem;
              font-weight: 500;
              color: myColor("white");
              line-height: 1.2;
            }
          }
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

        .bg-image {
          position: absolute;
          transition: all 0.3s ease;
          object-fit: contain;
          pointer-events: none;
        }

        .top-left {
          top: -25%;
          left: -15%;
          transform: rotate(15deg);
          width: min(350px, 100dvw);
          height: auto;
          filter: (2px);
          transform-origin: top left;

          @include from(mobile) {
            top: -15%;
            left: -10%;
            width: min(350px, 100dvw);
          }

          @include from(tablet) {
            width: min(700px, 100dvw);
            top: -10%;
            left: -10%;
          }
        }

        .bottom_left {
          bottom: -15%;
          left: -35px;
          transform: rotate(-15deg);
          width: min(350px, 100dvw);
          height: auto;
          transform-origin: bottom left;
          z-index: 9;

          @include from(mobile) {
            bottom: -40%;
            left: -10%;
            width: min(650px, 100dvw);
          }

          @include from(tablet) {
            bottom: -10%;
            left: 0%;
            width: min(750px, 100dvw);
          }
        }

        .bottom-right {
          bottom: 35%;
          right: 20%;
          transform: rotate(75deg);
          width: min(350px, 100dvw);
          height: auto;
          transform-origin: bottom right;

          @include from(mobile) {
            top: -15%;
            right: 30%;
            width: min(550px, 100dvw);
          }

          @include from(tablet) {
            top: 15%;
            right: 30%;
            width: min(750px, 100dvw);
          }
        }
      }
    }
  }
}

.marquee {
  width: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: relative;

  @include from(mobile) {
    &:last-child {
      margin-top: 80px;
    }
  }

  .marquee_content {
    display: flex;
    white-space: nowrap;
    animation: scrollLeftToRight 80s linear infinite;
    width: fit-content;

    span {
      display: inline-block;
      padding: 0 20px;
      font-size: 1.7rem;
      color: myColor("white");
      flex-shrink: 0;
      font-family: "DrukTextWideCyTT", Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      letter-spacing: -1px;

      @include from(mobile) {
        font-size: 3.8rem;
      }

      @include from(tablet) {
        font-size: 5.8rem;
      }
    }
  }
}

@keyframes scrollLeftToRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
