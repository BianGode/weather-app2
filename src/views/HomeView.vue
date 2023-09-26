<template>
  <div class="homeWrapper">
    <h1>This is the home view</h1>
    <!-- <Search v-model="location" :query="{location}"/> -->
    <input @keyup.enter="getWeatherNow" type="text" v-model="location">
    <button @click="getWeatherNow">Get Weather Now</button>
    <button @click="getWeatherForecast">Get Weather Forecast</button>
    <Results :weather="weather" :unit="unit" />
    <h3 v-if="weather.forecast">{{ weather.forecast }}</h3>
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Results from "@/components/Results.vue";

export default {
  props: ['logged', 'unit'],
  components: {
    Search,
    Results
  },
  data() {
    return {
      weather: 'niks',
      location: ''
    }
  },
  methods: {
    // fetch the weather from input city name than asign the response to this.weather
    async getWeatherNow() {
      try {
        let response = await fetch('http://api.weatherapi.com/v1/current.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&aqi=no')
        this.weather = await response.json();
        this.location = ''
      } catch (err) {
        console.log(err);
      }
    },
    async getWeatherForecast() {
      try {
        let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&aqi=no')
        this.weather = await response.json();
        this.location = ''
        console.log(this.weather.forecast.forecastday[0].day);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
<style scoped>
.homeWrapper {
  text-align: center;
}

</style>