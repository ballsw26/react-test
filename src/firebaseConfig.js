import firebase from 'firebase';
const config = { 
  databaseURL: "https://roomservice-179af.firebaseio.com",
}
export const Firebase = firebase.initializeApp(config);