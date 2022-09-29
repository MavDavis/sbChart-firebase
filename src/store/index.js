import { createStore } from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
export default createStore({
  state: {
    scrolled: false,
    loggedOut: localStorage.getItem("Is-logged") === "true",

    showOptions: false,
    showOptions: false,
    UserInitials: "",
    errorForDonate:"",
    errordCheck:false,
    userName: "",
    pendingPrice:"",
    userEmail: "",
    loading: false,
    userPassWord: "",
    userID: "",
    error: false,
    errMssg: "",
    confirmUserEmail:""
  },
  getters: {},
  mutations: {
    Login(state) {
      if (state.userEmail === "" || state.userPassWord === "") {
        return;
      } else {
        state.loading = true;

        signInWithEmailAndPassword(
          firebaseAuth,
          state.userEmail,
          state.userPassWord
        )
          .then((userCredential) => {
            localStorage.setItem("userid", userCredential.user.uid);
            state.loading = false;
            localStorage.setItem("Is-logged", false);
            console.log(state.loggedOut);
            window.location.reload();
          })
          .catch((error) => {
            state.loading = false;

            state.error = true;

            state.errMssg = error.message;
            setTimeout(() => {
              state.error = false;
              state.errMssg = "";
            }, 20000);
          });
      }
    },
        logout() {
      signOut(firebaseAuth)
        .then(() => {
          localStorage.removeItem('userid')
          window.location.reload();
          localStorage.setItem("Is-logged", true);

        })
        .catch((err) => {
          console.log(err);
        });
    },
    async Submit(state) {
      if (
        state.userEmail === "" ||
        state.userName === "" ||
        state.userPassWord === ""
      ) {
        state.error = true;
        state.errMssg = "Please, fill all details.";
        setTimeout(() => {
          state.error = false;
          state.errMssg = "";
        }, 5000);
      } else if (state.userPassWord.length < 7) {
        state.error = true;
        state.errMssg = "Password must be minimum of eight characters";
        setTimeout(() => {
          state.error = false;
          state.errMssg = "";
        }, 5000);
      } else if (
        !state.userEmail.includes("@") ||
        !state.userEmail.includes(".")
      ) {
        state.error = true;
        state.errMssg = "Enter a valid Email";
        setTimeout(() => {
          state.error = false;
          state.errMssg = "";
        }, 5000);
      } else {
        state.loading = true;
        createUserWithEmailAndPassword(
          firebaseAuth,
          state.userEmail,
          state.userPassWord
        )
          .then((userCredential) => {
            console.log(userCredential.user.reloadUserInfo.localId);
            state.userID = userCredential.user.reloadUserInfo.localId;
            localStorage.setItem(
              "userid",
              userCredential.user.reloadUserInfo.localId
            );
            localStorage.setItem("Is-logged", false);

          })
          .catch((err) => {
            state.loading = false;
            state.error = true;
            state.errMssg = err.message;
            setTimeout(() => {
              state.error = false;
              state.errMssg = "";
            }, 10000);
          })
          .then(() => {
            setDoc(doc(db, "Users", state.userID), {
              Email: state.userEmail,
              password: state.userPassWord,
              Username: state.userName,
              transaction: [{ time: "", price: state.pendingPrice, paid: false }],
            });
            state.loading = false;
            window.location.reload();
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
    async getUserData(state) {
      const user = firebaseAuth.currentUser;
      let newID = localStorage.getItem("userid")
      const docRef = doc(db, "Users", newID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let initial =
          docSnap.data().Username.toUpperCase().slice(0, 1) +
          docSnap
            .data()
            .Username.toUpperCase()
            .slice(
              docSnap.data().Username.length - 1,
              docSnap.data().Username.length
            );
        state.userEmail = docSnap.data().Email;
        state.userName = docSnap.data().Username;
        state.userPassWord = docSnap.data().password;
        UserInitials.UserInitials = initial;
      } else {
        console.log("No such document!");
      }
    },
    donateLogin(state){
      if (
        state.userEmail != 
        state.confirmUserEmail
      ){
        state.errorForDonate  = "Email doesn't match. Enter a valid Email"
        state.errordCheck = true
      }else if(state.pendingPrice ===""){
        state.errorForDonate  = " Enter a valid Amount"
        state.errordCheck = true
      }else{
        state.errordCheck = false
       let password = (generatedPassword(14));
       state.loading = true;


        createUserWithEmailAndPassword(
          firebaseAuth,
          state.userEmail,
          password
        )
          .then((userCredential) => {
            console.log(userCredential.user.reloadUserInfo.localId);
            state.userID = userCredential.user.reloadUserInfo.localId;
            localStorage.setItem(
              "userid",
              userCredential.user.reloadUserInfo.localId
            );
            localStorage.setItem("Is-logged", false);

          })
          .catch((err) => {
            state.loading = false;
            state.error = true;
            state.errMssg = err.message;
            setTimeout(() => {
              state.error = false;
              state.errMssg = "";
            }, 10000);
          })
          .then(() => {
            setDoc(doc(db, "Users", state.userID), {
              Email: state.userEmail,
              password: password,
              Username: state.userName,
              transaction: [{ time: "", price: state.pendingPrice, paid: false }],
            });
            state.loading = false;
          });
     
      }
    },
    changeUserDetails(state){
      const user = firebaseAuth.currentUser
      const docRef = doc(db, "Users", user.uid);
      const data = {
        Email: state.userEmail,
        password: state.userPassWord,
        Username: state.userName,
        transaction: [{ time: "", price: state.pendingPrice, paid: false }],
      };
      setDoc(docRef, data)
.then(docRef => {
})
.catch(error => {
    console.log(error);
})
    },
  },
  actions: {},
  modules: {},
});
function generatedPassword(length){
  // let Password = ""
  // const validChars = "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMOPQRSTUVWXYZ" + ",.-{}+!\#$&%()+?"
  for(let i = 0; i < length; i++){
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0]
    return randomNumber
    // randomNumber = Math.floor(randomNumber *validChars.length)
    // Password += validChars[randomNumber]
  }         
}