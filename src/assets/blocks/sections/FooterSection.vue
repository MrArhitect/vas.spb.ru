<script setup lang="ts">
import SVRIcon from "../icons/partners/SVRIcon.vue";
import SSOIcon from "../icons/partners/SSOIcon.vue";
import MinObrIcon from "../icons/partners/MinObrIcon.vue";
import MOIcon from "../icons/partners/MOIcon.vue";
import FSBIcon from "../icons/partners/FSBIcon.vue";
import GYSIcon from "../icons/partners/GYSIcon.vue";
import FSOIcon from "../icons/partners/FSOIcon.vue";
import FplusIcon from "../icons/partners/FplusIcon.vue";
import NGIcon from "../icons/partners/NGIcon.vue";
import SberIcon from "../icons/partners/SberIcon.vue";
import SPBGUTIcon from "../icons/partners/SPBGUTIcon.vue";
import GaspromBankIcon from "../icons/partners/GaspromBankIcon.vue";
import PolitehIcon from "../icons/partners/PolitehIcon.vue";
import MosPolitehIcon from "../icons/partners/MosPolitehIcon.vue";
import TomskPolitehIcon from "../icons/partners/TomskPolitehIcon.vue";
import OMPIcon from "../icons/partners/OMPIcon.vue";
import NATIIcon from "../icons/partners/NATIIcon.vue";
import MAIIcon from "../icons/partners/MAIIcon.vue";
import SPBUIcon from "../icons/partners/SPBUIcon.vue";
import STCIcon from "../icons/partners/STCIcon.vue";
import LATYIcon from "../icons/partners/LATYIcon.vue";
import InnoPolisIcon from "../icons/partners/InnoPolisIcon.vue";
import RubinIcon from "../icons/partners/RubinIcon.vue";
import MGTUIcon from "../icons/partners/MGTUIcon.vue";
import TechnoparkFullIcon from "../icons/TechnoparkFullIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";

const mySection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const checkVisibility = (): void => {
  if (!mySection.value) return;

  const rect = mySection.value.getBoundingClientRect();
  const isOnScreen = rect.top < window.innerHeight - 100;

  if (isOnScreen && !isVisible.value) {
    isVisible.value = true;
  }
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
  <div class="animated-section" ref="mySection" :class="{ visible: isVisible }">
    <footer class="cooperation-footer">
      <div class="cooperation-title">Мы сотрудничаем</div>
      <div class="logo-row0">
        <div class="item">
          <div class="mo logo-item">
            <MOIcon w="200px"></MOIcon>
            <div>Министерство обороны Российской Федерации</div>
          </div>
        </div>
      </div>

      <div class="mobile-view">
        <div class="marquee marquee--primary">
          <div class="marquee__content">
            <div class="marquee__item">
              <FSBIcon w="60px" />
              <span>Федеральная служба безопасности Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <SVRIcon w="80px" />
              <span>Служба внешней разведки Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <FSOIcon w="70px" />
              <span>Федеральная служба охраны Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <GYSIcon w="70px" />
              <span>Главное управления связи Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <SSOIcon w="70px" />
              <span>Силы специальных операций Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <NGIcon w="80px" />
              <span>Федеральная служба войск национальной гвардии Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <FSBIcon w="60px" />
              <span>Федеральная служба безопасности Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <SVRIcon w="80px" />
              <span>Служба внешней разведки Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <FSOIcon w="70px" />
              <span>Федеральная служба охраны Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <GYSIcon w="70px" />
              <span>Главное управления связи Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <SSOIcon w="70px" />
              <span>Силы специальных операций Российской Федерации</span>
            </div>
            <div class="marquee__item">
              <NGIcon w="80px" />
              <span>Федеральная служба войск национальной гвардии Российской Федерации</span>
            </div>
          </div>
        </div>
        <div class="marquee marquee--secondary">
          <div class="marquee__content marquee__content--reverse">
            <div class="marquee__item"><SberIcon w="80px" /></div>
            <div class="marquee__item"><OMPIcon w="80px" /></div>
            <div class="marquee__item">
              <img
                src="../../../../public/images/mashtab_img.png"
                alt="Маштаб"
                class="marquee__img"
              />
            </div>
            <div class="marquee__item"><FplusIcon w="120px" /></div>
            <div class="marquee__item"><GaspromBankIcon w="80px" /></div>
            <div class="marquee__item"><MinObrIcon w="80px" /></div>
            <div class="marquee__item"><InnoPolisIcon w="80px" /></div>
            <div class="marquee__item"><SPBUIcon w="160px" /></div>
            <div class="marquee__item"><PolitehIcon w="160px" /></div>
            <div class="marquee__item"><MosPolitehIcon w="120px" /></div>
            <div class="marquee__item"><TomskPolitehIcon w="80px" /></div>
            <div class="marquee__item"><NATIIcon w="80px" /></div>
            <div class="marquee__item"><MGTUIcon w="80px" /></div>
            <div class="marquee__item"><SPBGUTIcon w="80px" /></div>
            <div class="marquee__item"><LATYIcon w="80px" /></div>
            <div class="marquee__item"><MAIIcon w="80px" /></div>
            <div class="marquee__item"><RubinIcon w="80px" /></div>
            <div class="marquee__item"><STCIcon w="80px" /></div>
            <div class="marquee__item"><SberIcon w="80px" /></div>
            <div class="marquee__item"><OMPIcon w="80px" /></div>
            <div class="marquee__item">
              <img
                src="../../../../public/images/mashtab_img.png"
                alt="Маштаб"
                class="marquee__img"
              />
            </div>
            <div class="marquee__item"><FplusIcon w="120px" /></div>
            <div class="marquee__item"><GaspromBankIcon w="80px" /></div>
            <div class="marquee__item"><MinObrIcon w="80px" /></div>
            <div class="marquee__item"><InnoPolisIcon w="80px" /></div>
            <div class="marquee__item"><SPBUIcon w="160px" /></div>
            <div class="marquee__item"><PolitehIcon w="160px" /></div>
            <div class="marquee__item"><MosPolitehIcon w="120px" /></div>
            <div class="marquee__item"><TomskPolitehIcon w="80px" /></div>
            <div class="marquee__item"><NATIIcon w="80px" /></div>
            <div class="marquee__item"><MGTUIcon w="80px" /></div>
            <div class="marquee__item"><SPBGUTIcon w="80px" /></div>
            <div class="marquee__item"><LATYIcon w="80px" /></div>
            <div class="marquee__item"><MAIIcon w="80px" /></div>
            <div class="marquee__item"><RubinIcon w="80px" /></div>
            <div class="marquee__item"><STCIcon w="80px" /></div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="desktop">
          <div class="general_partners">
            <div class="logo-row2" style="margin-bottom: 50px">
              <div class="item">
                <div class="fsbs partner-card">
                  <FSBIcon w="70px"></FSBIcon>
                  <span>Федеральная служба безопасности Российской Федерации</span>
                </div>
              </div>
              <div class="item">
                <div class="svr partner-card">
                  <SVRIcon w="100px"></SVRIcon>
                  <span>Служба внешней разведки Российской Федерации</span>
                </div>
              </div>
              <div class="item">
                <div class="fso partner-card">
                  <FSOIcon w="80px"></FSOIcon>
                  <span>Федеральная служба охраны Российской Федерации</span>
                </div>
              </div>
            </div>

            <div class="logo-row1">
              <div class="item">
                <div class="GYS partner-card">
                  <GYSIcon w="80px"></GYSIcon>
                  <span>Главное управления связи Российской Федерации</span>
                </div>
              </div>
              <div class="item">
                <div class="SSO partner-card">
                  <SSOIcon w="80px"></SSOIcon>
                  <span>Силы специальных операций Российской Федерации</span>
                </div>
              </div>
              <div class="item">
                <div class="NGI partner-card">
                  <NGIcon w="100px"></NGIcon>
                  <span>Федеральная служба войск национальной гвардии Российской Федерации</span>
                </div>
              </div>
            </div>
          </div>

          <div class="partners">
            <div class="logo-row partners-row">
              <div class="logo-item"><SberIcon class="partner-logo" w="100px"></SberIcon></div>
              <div class="logo-item"><OMPIcon class="partner-logo" w="100px"></OMPIcon></div>
              <div class="logo-item">
                <img
                  loading="lazy"
                  src="../../../../public/images/mashtab_img.png"
                  class="partner-logo-img"
                />
              </div>
              <div class="logo-item">
                <FplusIcon class="partner-logo-large" w="150px"></FplusIcon>
              </div>
              <div class="logo-item">
                <GaspromBankIcon class="partner-logo" w="100px"></GaspromBankIcon>
              </div>
              <div class="logo-item"><MinObrIcon class="partner-logo" w="100px"></MinObrIcon></div>
            </div>

            <div class="logo-row partners-row">
              <div class="logo-item">
                <InnoPolisIcon class="partner-logo" w="100px"></InnoPolisIcon>
              </div>
              <div class="logo-item">
                <SPBUIcon class="partner-logo-large" w="200px"></SPBUIcon>
              </div>
              <div class="logo-item">
                <PolitehIcon class="partner-logo-large" w="200px"></PolitehIcon>
              </div>
              <div class="logo-item">
                <MosPolitehIcon class="partner-logo-large" w="150px"></MosPolitehIcon>
              </div>
              <div class="logo-item">
                <TomskPolitehIcon class="partner-logo" w="100px"></TomskPolitehIcon>
              </div>
              <div class="logo-item"><NATIIcon class="partner-logo" w="100px"></NATIIcon></div>
            </div>

            <div class="logo-row5 partners-row" style="padding-bottom: 30px">
              <div class="logo-item"><MGTUIcon class="partner-logo" w="100px"></MGTUIcon></div>
              <div class="logo-item"><SPBGUTIcon class="partner-logo" w="100px"></SPBGUTIcon></div>
              <div class="logo-item"><LATYIcon class="partner-logo" w="100px"></LATYIcon></div>
              <div class="logo-item"><MAIIcon class="partner-logo" w="100px"></MAIIcon></div>
              <div class="logo-item"><RubinIcon class="partner-logo" w="100px"></RubinIcon></div>
              <div class="logo-item"><STCIcon class="partner-logo" w="100px"></STCIcon></div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row4">
        <div class="techpark">
          <TechnoparkFullIcon w="70px"></TechnoparkFullIcon>
          <div>@2025 Технопарк ВАС</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/base.scss" as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "GolosText" !important;
}

.cooperation-footer {
  margin-top: 64px;
  background: #000000;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 80px 80px;
}

.cooperation-title {
  font-size: 52px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: -0.5px;
  text-align: center;
  margin-bottom: 84px;
}

.desktop {
  display: block;
}

.mobile-view {
  display: none;
}

.logo-row,
.logo-row0,
.logo-row1,
.logo-row2,
.logo-row4,
.logo-row5 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px 60px;
}

.logo-row0,
.logo-row2,
.logo-row1,
.logo-row5 {
  filter: grayscale(100%);
}

.logo-row4 {
  justify-content: center;
}

.logo-row5 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 30px;
}

.mo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: medium;
  padding-bottom: 40px;
  gap: 20px;
  width: 200px;
}

.techpark {
  display: flex;
  flex-direction: column;
  font-size: small;
  padding-bottom: 40px;
  gap: 20px;
  margin-top: 50px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.item:hover {
  opacity: 0.7;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.logo-item:hover {
  opacity: 0.7;
}

.logo-item img {
  max-width: 140px;
  max-height: 80px;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
}

.partner-card {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 350px;
  height: max-content;
  font-size: medium;
}

.partner-logo {
  width: 100px !important;
}

.partner-logo-large {
  width: 150px !important;
}

.partner-logo-img {
  max-width: 140px;
}

@media (max-width: 768px) {
  .container {
    padding: 40px 20px 60px;
  }

  .cooperation-title {
    font-size: 28px;
    margin-bottom: 36px;
    text-align: center;
  }

  .desktop {
    display: none;
  }

  .mobile-view {
    display: block;
  }

  .marquee {
    width: 100%;
    overflow: hidden;
    position: relative;

    &--primary {
      .marquee__content {
        animation: marquee-scroll 50s linear infinite;
      }

      .marquee__item {
        width: 270px;
        flex-shrink: 0;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 15px 20px;
        white-space: normal;
        color: #ffffff;
        font-size: 13px;
        text-align: center;

        span {
          display: block;
          line-height: 1.4;
          word-break: break-word;
        }
      }

      .marquee__item :deep(svg) {
        flex-shrink: 0;
      }
    }

    &--secondary {
      .marquee__item {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 0 25px;
        white-space: nowrap;
        flex-shrink: 0;
      }
    }
  }

  .marquee__content {
    display: flex;
    width: max-content;
    animation: marquee-scroll 35s linear infinite;

    &--reverse {
      animation: marquee-scroll-reverse 40s linear infinite;
    }
  }

  .marquee__item {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 0 25px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 13px;
    flex-shrink: 0;

    span {
      max-width: 270px;
    }

    filter: grayscale(100%);
  }
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 480px) {
  .marquee {
    &__item {
      gap: 8px;
      padding: 0 15px;
      font-size: 11px;
    }

    &__img {
      height: 64px;
    }
  }

  .marquee__item :deep(svg) {
    height: 100px !important;
  }
}
</style>
