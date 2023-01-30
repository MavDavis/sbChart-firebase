<template>
  <div class="w-full relative text-center"><p class="text-xl font-semibold">All Users</p></div>
  <ul class="w-full relative">
    <li v-for="user in users" :key="user.id" class="w-full relative my-2">
      <div class="flex w-full relative justify-between items-center">
        <div class="w-20 h-20 flex items-center justify-center">
          <img
            v-if="user.profileImage"
            :src="user.profileImage"
            alt=""
            class="w-20 h-20 rounded-full"
          />
          <i v-else class="fas fa-user text-4xl"></i>
        </div>
        <p>{{ user.Username }}</p>
        <p>
          <span v-if="user.key">Admin</span>
          <span v-else>User</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const q = query(collection(db, "Users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const { Email, Username, profileImage, key } = doc.data();
      const obj = { Email, Username, profileImage, key, id: doc.id };
      this.users.push(obj);
    });
  },
};
</script>
<style lang=""></style>
