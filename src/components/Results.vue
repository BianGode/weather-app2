<template>
  <div>
    <!-- <iframe src="https://google.com" frameborder="1"></iframe> -->
    <!-- <video playsinline autoplay muted loop id="bgvid">
        <source src="../assets/rainAnimate.mp4" type="video/mp4">
      </video> -->

    <div class="resultWrapper" v-if="weather !== 'niks'">
      <div class="current">
        <img :src="'https:' + weather.current.condition.icon" :alt="weather.current.condition.text" />
        <h3>{{ weather.current.condition.text }}</h3>
        <p v-if="unit == 'C'">Temp: {{ weather.current.temp_c }} Celsius</p>
        <p v-if="unit == 'C'">Feels like:{{ weather.current.feelslike_c }} Celsius</p>
        <p v-if="unit == 'C'">{{ weather.current.wind_kph }} Km/h</p>

        <p v-if="unit == 'F'">Temp: {{ weather.current.temp_f }}Fahrenheit</p>
        <p v-if="unit == 'F'">Feels like:{{ weather.current.feelslike_f }} Fahrenheit</p>
        <p v-if="unit == 'F'">{{ weather.current.wind_mph }} Mp/h</p>

        <p>Wind Direction:{{ weather.current.wind_dir }}</p>

      </div>
      <div class="location">
        <h3>{{ weather.location.name }}</h3>
        <h4>{{ weather.location.country }}</h4>
        <div>
          <p>{{ weather.location.lon }} : {{ weather.location.lat }}</p>
        </div>
      </div>
    </div>

    <!-- v-if="weather == 'niks' && forecast !== ''" -->
    <h2>{{ city }}</h2>
    <div class="forecast" v-if="forecastCoverted.timeArr.length > 0">
      <div class="hour" v-for="hour in forecastCoverted.timeArr">
        <p>{{ hour.time }}</p>
        <p v-if="unit == 'C'">{{ hour.tempC }}</p>
        <p v-if="unit == 'F'">{{ hour.tempF }}</p>
      </div>
      <!-- <p v-for="day in forecast.forecastday"> -->
      <!-- <h3>{{ day.date }}</h3> -->


      <!-- <p v-for="hour in day.hour"> -->
      <!-- {{ hour.temp_c }} -->
      <!-- </p> -->

      <!-- </p> -->
    </div>

  </div>
</template>

<!-- ############# -->
<!-- after the forecast renders once and I type in another location the values dont update -->

<script>
export default {
  props: ['weather', 'forecast', 'icon', 'unit', 'city'],
  data() {
    return {
      IconString: '',
      forecastConvArr: '',
      forecastCoverted: {
        timeArr: [],

      },
      forecastComp: this.forecast !== ''? this.forecast : ''
    }
  },
  mounted() {

  },
  computed: {
    // Here I need to use computed properties to make calculation in the right place
    // I push this to github because i can and i want to have more github pushes
  },
  watch: {
    forecastComp: function(newval, oldval) {
      console.log(newval, oldval)
      // The forEach is to convert the data into a usable array of objects with time and temperature in C and F 
      // if (this.forecast !== '') {
      this.forecast.forecastday.forEach((el) => {
        el.hour.forEach((hour) => {
          let timeConv = hour.time.split(' ')
          console.log(timeConv);
          timeConv = timeConv[1].split(':')
          console.log(timeConv)
          this.forecastCoverted.timeArr.push({
            time: timeConv[0],
            tempC: hour.temp_c,
            tempF: hour.temp_f
          })
        })
      })
      console.log(this.forecastCoverted.timeArr);
      // }
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.resultWrapper {
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
}

.location>div {
  display: inline;
}

/* video styling */

video {
  object-fit: cover;
  width: 100px;
  height: 300px;
  position: fixed;
  top: 0;
  left: 0
}

/* scrollable horizontal list */
.forecast {
  overflow: auto;
  white-space: nowrap;
  width: 600px;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: auto auto;
  position: relative; */

}

.hour {
  display: inline-block;
  margin: 10px 10px;
}

.hour>p {
  /* display: inline-block; */
}
</style>