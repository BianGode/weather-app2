<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
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
      // auth.createUserWithEmailAndPassword(this.email, this.password)
      //   .then((data) => {
      //     console.log('Succesfully registed');
      //     router.push('/')
      //       .catch(error => {
      //         console.log(error.code)
      //         alert(error.message);
      //       });
      //   })

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

<style scoped></style>