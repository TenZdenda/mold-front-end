<template>
  <div class="bg-gray-50 h-screen">
    <div class="max-w-6xl mx-auto p-4 space-y-10">
      <Navbar />
      <div class="space-y-10">
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
              <p class="font-bold">
                {{ weather.location.name }}, {{ weather.location.country }}
              </p>
            </div>
            <div class="md:flex md:space-x-10 space-y-10 md:space-y-0">
              <div class="flex space-x-4 items-center">
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
                <p class="text-2xl">{{ weather.current.humidity }} %</p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-600">
                Last updated at
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
              <p class="font-bold">Copenhagen, Denmark</p>
            </div>
            <div class="md:flex md:space-x-10 space-y-10 md:space-y-0">
              <div class="flex space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <p class="text-2xl">22°</p>
              </div>
              <div class="flex space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <p class="text-2xl">40%</p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-600">Last updated 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      weather: {},
      record: {},
    };
  },
  mounted() {
    this.loadWeather();
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
        .get("https://localhost:5001/api/Records", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          this.record = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
