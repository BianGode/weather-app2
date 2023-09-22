<template>
  <div>
    <div v-if="weather !== 'niks'">
      <img :src="'https:' + weather.current.condition.icon" :alt="weather.current.condition.text" />
      <h3>{{ weather.current.condition.icon }}</h3>
      <h3>{{ weather.current.feelslike_c }} Celsius</h3>
      <h3>{{ weather.current.wind_kph }} Km/h</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weather', 'icon'],
  data() {
    return {
      IconString: ''
    }
  },
  mounted() {
    // this.IconString = this.weather.current ?
    //     "https:" + this.weather.current.condition.icon : ''
        
    // console.log(IconString);
  },
  methods: {

  }
}
</script>

<style scoped></style>