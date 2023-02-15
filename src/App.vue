<template>
  <BarChart :sentData= datas  />
  <h1 class="text-3xl font-semibold">firebase data, edit to your taste. read on vue charts doc to implement the remaining functionality remaining. you can use store the 'datas' in locaStorage and only run the fetch from firebase if the datas aint in existent, </h1>
  <div class="w-full flex flex-col justify-between mx-3" v-for =' data in datas' :key="data.id">
 
 <div class="flex justify-between items-center my-4">
  <p>name:{{ data.name }}</p>
  <p>age:{{ data.age }}</p>
  <p>bloodGroup:{{ data.bloodGroup }}</p>
 </div>
  </div>
</template>

<script>
import { db } from "./firebase";
import {
  doc,
  setDoc,
  addDoc,
  getDocs,
  collection,
  query,
} from "firebase/firestore";

import BarChart from "./components/BarChart.vue";

export default {
  name: "App",
  data() {
    return {
      datas: [],
    };
  },
  components: { BarChart },
  async mounted() {
    //   const docRef = await addDoc(collection(db, "Users"), {
    //     name: "Wizzy",
    //     age: 24,
    //     bloodGroup:'B-'
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    const q = query(collection(db, "Users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let obj = {
        name: doc.data().name,
        age: doc.data().age,
        id: doc.id,
        bloodGroup: doc.data().bloodGroup,
      };
this.datas.push(obj); 

});
  },
};
</script>
