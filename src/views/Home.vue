<template>
  <div class="bg-gray-50 h-screen">
    <div class="max-w-6xl mx-auto p-4 space-y-10">
      <Navbar />
      <div class="space-y-10">
        <NotificationOK v-if="notification == 'success'" />
        <NotificationWarn v-if="notification == 'warn'" />
        <NotificationBad v-if="notification == 'problem'" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-8 rounded-lg shadow-xl space-y-5">
            <a
              href="https://www.weatherapi.com"
              class="text-xl flex items-center space-x-3"
            >
              <p>Weather API</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <div class="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p class="font-bold" v-if="weather.location">
                {{ weather.location.name }}, {{ weather.location.country }}
              </p>
            </div>
            <div class="md:flex md:space-x-10 space-y-10 md:space-y-0">
              <div class="flex space-x-4 items-center" v-if="weather.current">
                <img :src="weather.current.condition.icon" alt="" />
                <div>
                  <p class="text-sm text-gray-700">
                    {{ weather.current.condition.text }}
                  </p>
                  <p class="text-2xl">
                    {{ weather.current.temp_c }}° ({{ weather.current.temp_f }}
                    °F)
                  </p>
                </div>
              </div>
              <div class="flex space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9,7.75C9,5,6.42,3.24,6.31,3.17a1,1,0,0,0-1.12,0C5.08,3.25,2.5,5,2.5,7.75a3.25,3.25,0,0,0,6.5,0ZM5.75,9A1.25,1.25,0,0,1,4.5,7.75,3.66,3.66,0,0,1,5.75,5.3,3.61,3.61,0,0,1,7,7.75,1.25,1.25,0,0,1,5.75,9Zm6.06,1.17a1,1,0,0,0-1.12,0c-.17.12-4.19,2.9-4.19,7.08a4.75,4.75,0,0,0,9.5,0C16,13,12,10.28,11.81,10.17ZM11.25,20A2.75,2.75,0,0,1,8.5,17.25c0-2.31,1.81-4.17,2.76-5,.94.79,2.74,2.63,2.74,5A2.75,2.75,0,0,1,11.25,20ZM18.06,2.17a1,1,0,0,0-1.12,0C16.8,2.27,13.5,4.55,13.5,8a4,4,0,0,0,8,0C21.5,4.51,18.2,2.26,18.06,2.17ZM17.5,10a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,19.5,8,2,2,0,0,1,17.5,10Z"
                  />
                </svg>
                <p class="text-2xl" v-if="weather.current">
                  {{ weather.current.humidity }} %
                </p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-600" v-if="weather.current">
                Last updated
                {{ moment(weather.current.last_updated).toNow() }}
              </p>
            </div>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-xl space-y-5">
            <p class="text-xl">MOLD sensors</p>
            <div class="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p class="font-bold">Roskilde, Denmark</p>
            </div>
            <div class="md:flex md:space-x-10 space-y-10 md:space-y-0">
              <div class="flex space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13,15.28V10.5a1,1,0,0,0-2,0v4.78A2,2,0,0,0,10,17a2,2,0,0,0,4,0A2,2,0,0,0,13,15.28ZM16.5,13V5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,12,23,6,6,0,0,0,16.5,13Zm-2,7.07a4,4,0,0,1-5.32-6,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6Z"
                  />
                </svg>
                <p class="text-2xl">{{ record.temperature }}°</p>
              </div>
              <div class="flex space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9,7.75C9,5,6.42,3.24,6.31,3.17a1,1,0,0,0-1.12,0C5.08,3.25,2.5,5,2.5,7.75a3.25,3.25,0,0,0,6.5,0ZM5.75,9A1.25,1.25,0,0,1,4.5,7.75,3.66,3.66,0,0,1,5.75,5.3,3.61,3.61,0,0,1,7,7.75,1.25,1.25,0,0,1,5.75,9Zm6.06,1.17a1,1,0,0,0-1.12,0c-.17.12-4.19,2.9-4.19,7.08a4.75,4.75,0,0,0,9.5,0C16,13,12,10.28,11.81,10.17ZM11.25,20A2.75,2.75,0,0,1,8.5,17.25c0-2.31,1.81-4.17,2.76-5,.94.79,2.74,2.63,2.74,5A2.75,2.75,0,0,1,11.25,20ZM18.06,2.17a1,1,0,0,0-1.12,0C16.8,2.27,13.5,4.55,13.5,8a4,4,0,0,0,8,0C21.5,4.51,18.2,2.26,18.06,2.17ZM17.5,10a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,19.5,8,2,2,0,0,1,17.5,10Z"
                  />
                </svg>
                <p class="text-2xl">{{ record.humidity }}%</p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-600">
                Last updated at
                {{ moment(record.createdAt).toNow() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NotificationBad from "../components/NotificationBad.vue";
import NotificationOK from "../components/NotificationOK.vue";
import NotificationWarn from "../components/NotificationWarn.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    NotificationOK,
    NotificationBad,
    NotificationWarn,
  },
  data() {
    return {
      weather: {},
      record: {},
      avgTemp: 0,
      avgHumi: 0,
      notification: undefined,
    };
  },
  async mounted() {
    this.loadWeather();
    this.loadLastDataFromDevice();
    await this.loadAverageTemperatures();
    await this.loadAverageHumidity();
    await this.loadAverageData();
  },
  methods: {
    loadWeather() {
      this.$axios
        .get(
          "https://api.weatherapi.com/v1/current.json?key=" +
            process.env.VUE_APP_WEATHER_API_KEY +
            "&q=Roskilde&aqi=yes"
        )
        .then((response) => {
          this.weather = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadLastDataFromDevice() {
      this.$axios
        .get(process.env.VUE_APP_PRODUCTION_URL + "/api/Records/last/device-01")
        .then((response) => {
          this.record = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async loadAverageTemperatures() {
      await this.$axios
        .get(process.env.VUE_APP_PRODUCTION_URL + "/api/Records/avgTemp")
        .then((response) => {
          this.avgTemp =
            response.data[0][response.data[0].length - 1].temperature;
        });
    },
    async loadAverageHumidity() {
      await this.$axios
        .get(process.env.VUE_APP_PRODUCTION_URL + "/api/Records/avgHumi")
        .then((response) => {
          this.avgHumi = response.data[0][response.data[0].length - 1].humidity;
        });
    },
    async loadAverageData() {
      if (this.avgTemp <= 4.4 || this.avgHumi < 80) {
        this.notification = "success";
      }

      if (this.avgTemp <= 25 || this.avgHumi < 90) {
        this.notification = "warn";
      }

      if (this.avgTemp > 25 || this.avgHumi > 90) {
        this.notification = "problem";
      }
    },
  },
};
</script>
