
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8xqbJC8cbs_M20wso6LdMQQYl1VniV4A",
    authDomain: "semana-invertida-dio.firebaseapp.com",
    projectId: "semana-invertida-dio",
    storageBucket: "semana-invertida-dio.appspot.com",
    messagingSenderId: "487468818312",
    appId: "1:487468818312:web:3ff21971505244ea49a43d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;