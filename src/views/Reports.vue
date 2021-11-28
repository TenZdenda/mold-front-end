<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto p-4 space-y-10">
      <Navbar />
      <div class="space-y-10">
        <div class="md:flex md:space-x-3">
          <div>
            <p class="font-medium text-lg mb-5">
              Date: {{ moment().format("D. MM. YYYY") }}
            </p>
            <Table :head="heads" :data="body" />
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
      heads: ["Time", "Condition", "Temperature"],
      body: [],
    };
  },
  mounted() {
    this.getHistoryWeather();
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
            ]);
          });

          this.body = array;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
