import { createStore } from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import router from '../router'
export default createStore({
  state: {
    scrolled: false,
  
    loggedOut: localStorage.getItem("Is-logged") === "true",
    mobileScreen: false,
    mobileScreenOpened: false,
    showOptions: false,
    showOptions: false,
    UserInitials: "",
    errorForDonate: "",
    errordCheck: false,
    userName: "",
    pendingPrice: "",
    userEmail: "",
    loading: false,
    userPassWord: "",
    userID: "",
    error: false,
    errMssg: "",
    confirmUserEmail: "",
    profile: true,
    settings: false,
    completeDonations: false,
    makeDonations: false,
    contactus: false,
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
            state.userID =userCredential.user.uid
            localStorage.setItem("userid", userCredential.user.uid);
            state.loading = false;
            localStorage.setItem("Is-logged", false);
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
          localStorage.removeItem("userid");
          localStorage.setItem("Is-logged", true);
          router.push('/')
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
            state.userID = userCredential.user.reloadUserInfo.localId;
            localStorage.setItem(
              "userid",
              userCredential.user.reloadUserInfo.localId
            );
            localStorage.setItem("Is-logged", false);
            // window.location.reload();

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
            setDoc(doc(db, "User", state.userID), {
              Email: state.userEmail,
              password: state.userPassWord,
              Username: state.userName,
             
            });
            state.loading = false;
          }).then(()=>{
           router.push('/user') 
          })
      }
    },
   
    async getUserData(state) {
      const user = firebaseAuth.currentUser;
      let newID = localStorage.getItem("userid");
      const docRef = doc(db, "User", user.uid);
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
        state.UserInitials = initial;
      } else {
        console.log("No such document!");
      }
    },
   
    changeUserDetails(state) {
      const user = firebaseAuth.currentUser;
      const docRef = doc(db, "Users", user.uid);
      const data = {
        Email: state.userEmail,
        password: state.userPassWord,
        Username: state.userName,
        transaction: [{ time: "", price: state.pendingPrice, paid: false }],
      };
      setDoc(docRef, data)
        .then((docRef) => {})
        .catch((error) => {
          console.log(error);
        });
    },
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
