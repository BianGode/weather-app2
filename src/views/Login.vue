<template>
  <div class="loginWrapper">
    <label>Email</label>
    <input type="text" v-model="email">
    <label>Password</label>
    <input type="password" @keypress.enter="login" v-model="password">
    <button @click="login">Log in!</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword} from 'firebase/auth';
import {  } from 'firebase/database'
import { auth } from '../main.js'
import router from '@/router';
export default {
  props: ['logged'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.email !== '' && this.password !== '') {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        console.log('login succesfull');
        console.log(auth.currentUser.email)
        router.push('/')
      }).catch((err) => {
        console.log(err.code)
          alert(err.message);
      })
    }
    }
  },
  mounted() {
    if(this.isLoggedIn) {
      router.push('/')
    }
  }
}
</script>

<style scoped>
.loginWrapper {
  display: grid;
  grid-template-columns: auto;
  text-align: none;
  width: auto;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}
input {
  margin: 0 auto;
  width: 300px;
}
button {
  background-color: white;
  border: 3px solid orangered;
  width: fit-content;
  padding: 10px 30px;
  margin: 20px auto;
}
</style>