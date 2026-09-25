<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    class="radio-svg"
  >
    <defs>
      <!-- Градиент для фона -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" :stop-color="colors.bgStart" stop-opacity="1" />
        <stop offset="100%" :stop-color="colors.bgEnd" stop-opacity="1" />
      </linearGradient>

      <!-- Градиент для сигнала -->
      <linearGradient id="signalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" :stop-color="colors.signalPeak" stop-opacity="1" />
        <stop offset="100%" :stop-color="colors.signalBase" stop-opacity="0.7" />
      </linearGradient>

      <style>
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(20px);
          }
        }
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .signal-bar {
          transition: all 0.3s ease;
        }
      </style>
    </defs>

    <!-- Фон -->
    <rect :width="width" :height="height" fill="url(#bgGrad)" rx="4" />

    <!-- Линии сетки -->
    <g stroke="#2a3a6a" stroke-width="0.5" opacity="0.6">
      <line v-for="y in [30, 60, 90, 120]" :key="y" x1="0" :y1="y" :x2="width" :y2="y" />
      <line v-for="x in [50, 100, 150, 200, 250]" :key="x" :x1="x" y1="0" :x2="x" :y2="height" />
    </g>

    <!-- Спектр сигнала с динамическими значениями -->
    <g fill="url(#signalGrad)" opacity="0.85">
      <rect
        v-for="(bar, index) in signalData"
        :key="index"
        :x="bar.x"
        :y="bar.y"
        width="4"
        :height="bar.height"
        rx="1"
        class="signal-bar"
      />
    </g>

    <!-- Пиковые значения с неоном -->
    <g fill="#00ffcc" opacity="0.4">
      <rect
        v-for="peak in peakIndexes"
        :key="peak"
        :x="signalData[peak]?.x ?? 0"
        :y="signalData[peak]?.y ?? 0"
        width="4"
        :height="Math.min(8, signalData[peak]?.height ?? 0)"
        rx="1"
      />
    </g>

    <!-- Радиоволны (анимированные дуги) -->
    <g stroke="#00ffcc" stroke-width="1.2" fill="none" opacity="0.7">
      <path d="M 15 75 Q 30 55 45 75" />
      <path d="M 10 75 Q 30 45 50 75" class="pulse" />
      <path d="M 5 75 Q 30 35 55 75" />
    </g>

    <!-- Антенна -->
    <g stroke="#66ccff" stroke-width="1.5" fill="none">
      <line x1="280" y1="140" x2="280" y2="20" />
      <line x1="270" y1="40" x2="290" y2="40" />
      <line x1="268" y1="30" x2="292" y2="30" />
      <circle cx="280" cy="20" r="3" fill="#66ccff" opacity="0.6" />
    </g>

    <!-- Текстовая информация -->
    <text x="10" y="15" font-family="monospace" font-size="7" fill="#00ffcc" opacity="0.9">
      SIG: {{ signalStrength }} dBm
    </text>
    <text x="10" y="25" font-family="monospace" font-size="7" fill="#88aaff" opacity="0.8">
      FREQ: {{ frequency }} MHz
    </text>
    <text x="200" y="15" font-family="monospace" font-size="7" fill="#00ffcc" opacity="0.9">
      MODE: {{ mode }}
    </text>
    <text x="200" y="25" font-family="monospace" font-size="7" fill="#88aaff" opacity="0.8">
      SQL: {{ squelch }}
    </text>

    <!-- Водопад-спектрограмма -->
    <g opacity="0.5">
      <rect
        v-for="(waterfall, index) in waterfallData"
        :key="index"
        :x="50 + index * 4"
        :y="waterfall.y"
        width="2"
        :height="waterfall.height"
        :fill="waterfall.color"
      />
    </g>

    <!-- Импульсный сигнал -->
    <g stroke="#ffffff" stroke-width="0.8" opacity="0.5">
      <line x1="160" y1="140" x2="170" y2="140" />
      <line x1="172" y1="140" x2="178" y2="140" />
      <line x1="180" y1="140" x2="190" y2="140" />
      <circle cx="195" cy="140" r="2" fill="none" class="pulse" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, type Ref } from "vue";

interface SignalBar {
  x: number;
  y: number;
  height: number;
}

interface WaterfallBar {
  y: number;
  height: number;
  color: string;
}

interface Colors {
  bgStart: string;
  bgEnd: string;
  signalPeak: string;
  signalBase: string;
}

export default defineComponent({
  name: "RadioCommunication",
  props: {
    width: {
      type: Number,
      default: 306.67,
    },
    height: {
      type: Number,
      default: 150,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    // Цветовая схема
    const colors: Colors = {
      bgStart: "#0a0f24",
      bgEnd: "#1a2a4f",
      signalPeak: "#00ffcc",
      signalBase: "#0066ff",
    };

    // Динамические данные
    const signalStrength: Ref<number> = ref(-42);
    const frequency: Ref<string> = ref("144.500");
    const mode: Ref<string> = ref("FM");
    const squelch: Ref<string> = ref("OPEN");

    // Данные спектра
    const signalData: Ref<SignalBar[]> = ref([]);

    // Индексы пиковых значений
    const peakIndexes: number[] = [14, 25, 11, 27];

    // Данные для водопада
    const waterfallData: Ref<WaterfallBar[]> = ref([]);

    let intervalId: number | null = null;

    // Генерация случайных высот для сигнала
    const generateSignalData = (): SignalBar[] => {
      const data: SignalBar[] = [];
      const baseX = 8;
      const heightValue = props.height;

      for (let i = 0; i < 37; i++) {
        let height: number;
        // Создаем красивый спектр с пиками
        if (i === 14 || i === 25 || i === 27) {
          height = 110; // высокие пики
        } else if (i === 11 || i === 21) {
          height = 95;
        } else if (i > 10 && i < 30) {
          height = 40 + Math.random() * 50;
        } else {
          height = 20 + Math.random() * 30;
        }

        data.push({
          x: baseX + i * 8,
          y: heightValue - height,
          height: height,
        });
      }

      return data;
    };

    // Генерация данных для водопада
    const generateWaterfallData = (): WaterfallBar[] => {
      const colorList: string[] = ["#00ffcc", "#33ccff", "#3399ff", "#3366cc", "#224499"];
      const data: WaterfallBar[] = [];
      const heightValue = props.height;

      for (let i = 0; i < 15; i++) {
        const intensity = Math.random();
        let height: number;
        let color: string;

        if (intensity > 0.7) {
          height = 10;
          color = colorList[0];
        } else if (intensity > 0.4) {
          height = 7;
          color = colorList[1];
        } else {
          height = 4;
          color = colorList[3];
        }

        data.push({
          y: heightValue - height,
          height: height,
          color: color,
        });
      }

      return data;
    };

    const animateData = (): void => {
      if (!props.animated) return;

      intervalId = window.setInterval(() => {
        signalStrength.value = Math.floor(-60 + Math.random() * 25);

        const newData = generateSignalData();
        signalData.value = newData;

        // Обновляем водопад
        waterfallData.value = generateWaterfallData();

        // Иногда меняем режим для динамики
        if (Math.random() > 0.9) {
          const modes: string[] = ["FM", "AM", "USB", "CW"];
          mode.value = modes[Math.floor(Math.random() * modes.length)];
        }

        // Меняем состояние шумоподавителя
        if (Math.random() > 0.95) {
          squelch.value = Math.random() > 0.5 ? "OPEN" : "CLOSED";
        }
      }, 2000);
    };

    onMounted(() => {
      signalData.value = generateSignalData();
      waterfallData.value = generateWaterfallData();
      animateData();
    });

    onUnmounted(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    });

    return {
      colors,
      signalStrength,
      frequency,
      mode,
      squelch,
      signalData,
      peakIndexes,
      waterfallData,
    };
  },
});
</script>

<style scoped>
.radio-svg {
  display: block;
  background: transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.radio-svg:hover {
  filter: drop-shadow(0 0 5px rgba(0, 255, 204, 0.3));
}
</style>
