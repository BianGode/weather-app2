<template>
  <div>
    <div class="resultWrapper" v-if="weather !== 'niks'">
      <div class="current">
        <img :src="'https:' + weather.current.condition.icon" :alt="weather.current.condition.text" />
        <h3>{{ weather.current.condition.icon }}</h3>
        <h3>Temp: {{ weather.current.temp_c }} Celsius</h3>
        <!-- <h3>Temp: {{ weather.current.temp_f }}Fahrenheit</h3> -->
        <h3>Feels like:{{ weather.current.feelslike_c }} Celsius</h3>
        <!-- <h3>Feels like:{{ weather.current.feelslike_f }} Fahrenheit</h3> -->
        <h3>{{ weather.current.wind_kph }} Km/h</h3>
        <!-- <h3>{{ weather.current.wind_mph }} Mp/h</h3> -->
        <h3>Wind Direction:{{ weather.current.wind_dir }}</h3>
      </div>
      <div class="location">
        <h3>{{ weather.location.name }}</h3>
        <div>
          <h3>{{ weather.location.lon }}</h3>
          <h3>{{ weather.location.lat }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weather', 'icon', 'CorF'],
  data() {
    return {
      IconString: ''
    }
  },
  mounted() {
    console.log(this.weather);
  },
  methods: {

  }
}
</script>

<style scoped>
.resultWrapper {
  display: grid;
  grid-template-columns: auto auto;
}
</style>