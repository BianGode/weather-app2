import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

//firebase config info
const firebaseConfig = {
  apiKey: "AIzaSyAOFZGKgkQbUzW8oJYUerzKhdJQRAhGaFI",
  authDomain: "weather-app-f8040.firebaseapp.com",
  projectId: "weather-app-f8040",
  storageBucket: "weather-app-f8040.appspot.com",
  messagingSenderId: "287403375723",
  appId: "1:287403375723:web:467b078d8c5796c24f452e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

createApp(App).use(router).mount('#app')
