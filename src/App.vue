<template>
  <div :class="[store.isDark ? 'dark' : '']">
    <!-- homepage -->
    <div class="home-container">
      <div class="content-container">
        <!-- nav section -->
        <div class="nav-container">
          <Icon icon="solar:hamburger-menu-linear" />
          <div class="city-name"> Toronto</div>
          <div class="icon-container">
            <Transition name="slide-up">
              <Icon icon="solar:moon-bold-duotone" key="moon" v-if="store.isDark" @click="toggleTheme" />
              <Icon icon="solar:sun-bold" key="sun" v-else @click="toggleTheme" />
            </Transition>
          </div>
        </div>
        <!-- Main container -->
        <div class="main-container">
          <div class="secondary-details">
            <div class="sd">
              <div>
                <Icon icon="solar:cloud-bold-duotone" />
                <p>Reel feel</p>
              </div>
              <div class="measure">
                <h2>0</h2>
                <p>°C</p>
              </div>
            </div>
            <div class="sd">
              <div>
                <Icon icon="solar:wind-bold-duotone" />
                <p>Wind</p>
              </div>
              <div class="measure-km">
                <h2>0</h2>
                <p>km/h</p>
              </div>
            </div>
            <div class="sd">
              <div>
                <Icon icon="solar:waterdrop-bold-duotone" />
                <p>Humidity</p>
              </div>
              <div class="measure-per">
                <h2>0</h2>
                <p>%</p>
              </div>
            </div>
          </div>
          <div class="primary-details">
            <Icon icon="solar:cloud-rain-bold-duotone" />
            <div>
              <h2>0</h2>
              <p>°C</p>
            </div>

          </div>
        </div>
        <!-- Week container -->
        <div class="week-container">
          <fieldset>
            <legend>Forecast</legend>
          </fieldset>
          <div class="secondary-details">
            <div class="sd">
              <p>Now</p>
              <Icon icon="solar:cloud-bold-duotone" />
              <div class="measure">
                <h3>0</h3>
                <p>°C</p>
              </div>
            </div>
            <div class="sd">
              <p>04:00</p>
              <Icon icon="solar:wind-bold-duotone" />
              <div class="measure">
                <h3>0</h3>
                <p>°C</p>
              </div>
            </div>
            <div class="sd">
              <p>05:00</p>
              <Icon icon="solar:waterdrop-bold-duotone" />
              <div class="measure">
                <h3>0</h3>
                <p>°C</p>
              </div>
            </div>
            <div class="sd">
              <p>06:00</p>
              <Icon icon="solar:waterdrop-bold-duotone" />
              <div class="measure">
                <h3>0</h3>
                <p>°C</p>
              </div>
            </div>
            <div class="sd">
              <p>07:00</p>
              <Icon icon="solar:waterdrop-bold-duotone" />
              <div class="measure">
                <h3>0</h3>
                <p>°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { computed, ref } from 'vue';
import { useStore } from '@/stores/store.js'
const store = useStore();
const toggleTheme = () => {
  store.isDark = !store.isDark
}

const isDark = ref(true);
</script>
<style scoped></style>
