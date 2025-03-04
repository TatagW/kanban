
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");
    // Initialize Cloud Firestore through Firebase
  
    firebase.initializeApp({
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN,
        projectId: process.env.VUE_APP_PROJECT_ID
    });
  
    var db = firebase.firestore();
    export default db;

