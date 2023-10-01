<template>
  <div class="homeWrapper">
    <h1>This is the home view</h1>
    <!-- <Search v-model="location" :query="{location}"/> -->
    <input @keyup.enter="getWeatherNow" type="text" v-model="location">
    <button @click="getWeatherNow">Get Weather Now</button>
    <button @click="getWeatherForecast">Get Weather Forecast</button>
    <Results v-if="weather !== 'niks' || forecast !== ''" :weather="weather" :unit="unit" :forecast="forecast" :city="city" />
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
      location: '',
      forecast: '',
      city: ''
    }
  },
  methods: {
    // fetch the weather from input city name than asign the response to this.weather
    async getWeatherNow() {
      try {
        let response = await fetch('http://api.weatherapi.com/v1/current.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&aqi=no')
        this.weather = await response.json();
        this.location = ''
        this.forecast = ''
      } catch (err) {
        console.log(err);
        alert('city of country does not excist')
      }
    },
    async getWeatherForecast() {
      // fetch the forecast for 2 days. 
      // I want to make a variable where you can ask for n amount of days
      try {
        let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&days=2&aqi=no&alerts=no')
        let forecastTemp = await response.json();
        // asign the fetched response to the correct variable
        this.city = forecastTemp.location.name
        this.forecast = forecastTemp.forecast
        // reset the variables so its doens't add but replace or something
        this.location = ''
        this.weather = 'niks'
      } catch (err) {
        console.log(err);
        alert('city of country does not excist')
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