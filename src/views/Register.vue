<template>
  <h1>Register</h1>
  <div class="loginWrapper">
    <label>Email</label>
    <input type="text" v-model="email">
    <label>Password</label>
    <input type="password" @keypress.enter="register" v-model="password">
    <button @click="register">Log in!</button>
  </div>
</template>

<script>
import router from '@/router';
// import {auth} from '../FirebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      // idk what to comment because the code speaks for itself i guess
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log('Succesfully registered');
          router.push('/')
        }).catch(error => {
          console.log(error.code)
          alert(error.message);
        });
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
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