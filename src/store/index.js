import { createStore } from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { collection, onSnapshot } from "firebase/firestore";
  import { db } from "../firebase";
  import { doc, setDoc, addDoc } from "firebase/firestore";
  import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
export default createStore({
  state: {
    scrolled: false,
    loggedIn: false,
    showOptions: false,
    UserInitials: "",
    userFirstname: "",
    userLastname: "",
    userEmail: "",
  
    userPassWord: "",
    userID: "",
    error: false,
    errMssg: "",
  },
  getters: {},
  mutations: {
    Login(state) {
console.log(state.userEmail,  state.userPassWord)
      if (state.userEmail === "" || state.userPassWord === "") {
        console.log('err');
        return;
      } else {
        signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
          .then((userCredential) => {
            console.log(userCredential.user.uid);
            state.loggedIn = true
          })
          .catch((error) => {
            state.error = true;

           state.errMssg = error.message;
            setTimeout(() => {
              state.error = false;
              state.errMssg = "";
            }, 20000);
          });
      }
    },
    changedScrolledTotrue(state) { 
      state.scrolled = true;
    },
    changeStateshowOptions(state) {
      state.showOptions = !state.showOptions;
    },
    changedScrolledTofalse(state) {
      state.scrolled = false;
    },
  },
  actions: {},
  modules: {},
});
