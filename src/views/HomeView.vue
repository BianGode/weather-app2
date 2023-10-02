<template>
  <div class="homeWrapper">
    <h1>This is the home view</h1>
    <!-- <Search v-model="location" :query="{location}"/> -->
    <div class="weather-search-wrapper">
      <input @keyup.enter="getWeatherNow" type="text" v-model="location">
      <div class="search-btn-wrap">
        <button class="weather-now btn" @click="getWeatherNow">Weather Now</button>
        <button class="weather-forecast btn" @click="getWeatherForecast">Forecast</button>
      </div>
    </div>
    <Results v-if="weather !== 'niks' || forecast !== ''" :weather="weather" :unit="unit" :forecast="forecast"
      :city="city" />
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

/* button get weather-now and get weather-forecast styling */
.btn {
  background: none;
  border: 3px solid rgb(173, 69, 102);
  width: fit-content;
  height: auto;
  padding: 10px 30px;
}
.btn:hover {
  background-color:  rgb(173, 69, 102);
  border-color: rgb(189, 122, 143);
  transition: 0.1s ease-in;
  transform: scale(1.05);
  border-radius: 5px;
  
}

/* button and search bar layout/posistioning */
input {
  width: 400px;

}
input:focus {
  outline: 3px solid rgb(173, 69, 102);
}
.weather-search-wrapper {
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.search-btn-wrap {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}
</style>