<template></template>

<script>
export default {
  mounted() {
    if (!this.$store.state.loggedIn) {
      this.$router.push("./login");
    }
  },
};
</script>

<style>
</style>