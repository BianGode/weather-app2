<template>
  <nav>
    <div class="router-link-wrapper">
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/register" v-if="isLoggedIn == false">Register</router-link>
      <router-link class="router-link" to="/login" v-if="isLoggedIn == false">Login</router-link>
    </div>
    <div v-if="isLoggedIn" class="sign-out" @click="signOutFun">
      <h4>SignOut</h4>
    </div>
  </nav>
  <div @click="unitConverter" class="floatingbutton-div">
    <button class="unit-change-btn">{{ CorF }}</button>
    <p v-if="CorF == 'C'">Celcius</p>
    <p v-if="CorF == 'F'">Fahrenheit</p>
  </div>
  <router-view :logged="isLoggedIn" :unit="CorF" />
</template>
<script>
import router from './router'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from './main';

export default {
  data() {
    return {
      isLoggedIn: false,
      user: '',
      CorF: 'C'
    }
  },
  methods: {
    signOutFun() {
      signOut(auth).then((res) => {
        console.log('Logged out succesfull');
        this.user = ''
        router.push('/login')
      }).catch((err) => {
        console.log('error is ' + err);
      })
    },
    unitConverter() {
      this.CorF == 'C' ? this.CorF = 'F' : this.CorF = 'C'
    }
  },
  mounted() {
    // check if user is already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('logged in');
        this.user = user
        this.isLoggedIn = true
        // test if i can set document
        setDoc(doc(db, "saved-locations", "location"), {
          city: "Arnhem"
        });

      } else {
        console.log('not logged in');
        this.isLoggedIn = false
        router.push('/')
      }
    })
  }
}
</script>
<style>
nav {
  height: 40px;
  background-color: #52575d;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.router-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
}

.router-link:hover {
  color: rgb(65, 119, 237);
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

.sign-out {
  cursor: pointer;
}

/* flaating celcius fahrenheit button style */
.floatingbutton-div {
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.floatingbutton-div>p {
  display: none;
}

.unit-change-btn:hover .floatingbutton-div>p {
  display: block;
}
</style>
