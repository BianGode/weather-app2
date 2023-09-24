<template>
  <nav>
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/register">Register</router-link>
    <router-link class="router-link" to="/login">Login</router-link>
  </nav>
  <router-view />
</template>
<script>
// import { getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log('logged in');
        this.isLoggedIn = true
      } else {
        console.log('not logged in');
        this.isLoggedIn = false
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
}</style>
