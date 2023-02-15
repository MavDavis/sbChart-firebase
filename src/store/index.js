import { createStore } from "vuex";
import { db } from "../firebase";
import { doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseAuth } from "../firebase";
import router from "../router";
export default createStore({
state:{},
  getters: {},
  mutations: {
  

  },
  actions: {},
  modules: {},
});
function generatedPassword(length) {
  for (let i = 0; i < length; i++) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomNumber;
  }
}
