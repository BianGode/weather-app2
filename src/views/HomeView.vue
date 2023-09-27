<template>
  <div class="homeWrapper">
    <h1>This is the home view</h1>
    <!-- <Search v-model="location" :query="{location}"/> -->
    <input @keyup.enter="getWeatherNow" type="text" v-model="location">
    <button @click="getWeatherNow">Get Weather Now</button>
    <button @click="getWeatherForecast">Get Weather Forecast</button>
    <Results :weather="weather" :unit="unit" :forecast="forecast" />
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
      forecast: ''
    }
  },
  methods: {
    parseForecastDate(data) {
      data.forEach((el) => {
        el.hour.forEach((hour) => {
          console.log(hour);
        })
      })
      console.log(data.split(' '))
    },
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
        let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=b38dbcfab3d74cde9d0113841232009&q=' + this.location + '&days=2&aqi=no&alerts=no')
        // let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=b38dbcfab3d74cde9d0113841232009&q=''&aqi=no')
        let forecastParse = await response.json();
        this.forecast = forecastParse.forecast

        this.forecast.forecastday.forEach((el) => {
          el.hour.forEach((hour) => {
            console.log(hour);
          })
        })

        // parseForecastDate(this.forecast)
        // console.log(this.forecast);
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