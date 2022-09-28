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
    loggedIn: false,
    showOptions: false,
    UserInitials: "",
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
      state.loading = true;
      if (state.userEmail === "" || state.userPassWord === "") {
        return;
      } else {
        signInWithEmailAndPassword(
          firebaseAuth,
          state.userEmail,
          state.userPassWord
        )
          .then((userCredential) => {
            localStorage.setItem("userid", userCredential.user.uid);
            state.loading = false;
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
      console.log(user.uid);
      const docRef = doc(db, "Users", user.uid);
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
  },
  actions: {},
  modules: {},
});
