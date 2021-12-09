<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto p-4 space-y-10">
      <Navbar />
      <div class="space-y-10">
        <div class="md:flex md:space-x-3">
          <div class="flex-1">
            <div class="flex items-center space-x-10">
              <p>Data from</p>
              <a
                href="https://www.weatherapi.com"
                class="text-xl flex items-center space-x-3 text-gray-600 hover:text-black"
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
            </div>
            <p class="font-medium text-lg mb-5">
              Date: {{ moment().format("D. MM. YYYY") }}
            </p>
            <Table :head="heads" :data="body" />
          </div>
          <div class="flex-1">
            <div class="flex items-center space-x-4">
              <p>
                Data from <span class="text-xl text-gray-600">Our sensors</span>
              </p>
            </div>
            <p class="font-medium text-lg mb-5">
              Date: {{ moment().format("D. MM. YYYY") }}
            </p>
            <Table :head="deviceHeads" :data="deviceData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";

export default {
  components: {
    Navbar,
    Table,
  },
  data() {
    return {
      heads: ["Time", "Condition", "Temperature", "Humidity"],
      deviceHeads: ["Time", "Temperature", "Humidity"],
      body: [],
      deviceData: [],
    };
  },
  mounted() {
    this.getHistoryWeather();
    this.getHistoryDataFromDevice();
  },
  methods: {
    getHistoryWeather() {
      const array = [];

      this.$axios
        .get(
          "https://api.weatherapi.com/v1/history.json?key=" +
            process.env.VUE_APP_WEATHER_API_KEY +
            "&q=Roskilde&dt=" +
            this.moment().format("YYYY-MM-D")
        )
        .then((response) => {
          response.data.forecast.forecastday[0].hour.forEach((item) => {
            array.push([
              {
                id: item.item,
                text: this.moment(item.time).format("HH:mm"),
              },
              {
                icon: item.condition.icon,
                text: item.condition.text,
              },
              {
                text: item.temp_c + "°",
              },
              {
                text: item.humidity,
              },
            ]);
          });

          this.body = array;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHistoryDataFromDevice() {
      const array = [];

      this.$axios
        .get(process.env.VUE_APP_PRODUCTION_URL + "/api/Records")
        .then((response) => {
          response.data.slice(0, 25).forEach((item) => {
            array.push([
              {
                id: item.id,
                text: this.moment(item.createdAt).format("HH:mm"),
              },
              {
                text: item.temperature + "°",
              },
              {
                text: item.humidity,
              },
            ]);
          });

          this.deviceData = array;
        });
    },
  },
};
</script>
