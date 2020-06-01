import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjQ9PqgiAJTAbRpsRcX6M-N89XcI9nyyQ",
    authDomain: "my-awesome-project-1-6a9c6.firebaseapp.com",
    databaseURL: "https://my-awesome-project-1-6a9c6.firebaseio.com",
    projectId: "my-awesome-project-1-6a9c6",
    storageBucket: "my-awesome-project-1-6a9c6.appspot.com",
    messagingSenderId: "825633938363",
    appId: "1:825633938363:web:966d4ba92d5cc2c51b429e",
    measurementId: "G-01SXMQBXL5"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;