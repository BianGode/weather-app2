<template>
  <h1>This is the home view</h1>
  <Search v-model="location" :query="{location}"/>
  <button @click="getWeather">Get Weather</button>
  <div v-if="weather !== 'niks'">
    <h3>{{ weather.current.condition.text }}</h3>
    <h3>{{ weather.current.feelslike_c }} Celsius</h3>
    <h3>{{ weather.current.wind_kph }} Km/h</h3>
  </div>
</template>
<script>
import Search from "../components/Search.vue";

export default {
  components: {
    Search
  },
  data() {
    return {
      weather: 'niks',
      location: ''
    }
  },
  methods: {
    async getWeather() {
      try {
        // let response = await fetch('http://api.weatherapi.com/v1/current.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&aqi=no')
        // this.weather = await response.json();
        console.log(this.location)
        // console.log(this.weather.current);
        // console.log(this.weather.location);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>