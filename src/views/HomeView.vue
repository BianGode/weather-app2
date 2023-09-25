<template>
  <div class="homeWrapper">
    <h1>This is the home view</h1>
    <!-- <Search v-model="location" :query="{location}"/> -->
    <input @keyup.enter="getWeather" type="text" v-model="location">
    <button @click="getWeather">Get Weather</button>
    <Results :weather="weather" :unit="unit" />
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
    async getWeather() {
      try {
        let response = await fetch('http://api.weatherapi.com/v1/current.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&aqi=no')
        this.weather = await response.json();
        this.location = ''
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