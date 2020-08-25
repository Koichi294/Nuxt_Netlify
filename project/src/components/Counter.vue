<template>
  <div class="container">
    <v-btn @click="$store.commit('counter/increase')" color="primary">increase</v-btn>
    <v-btn @click="$store.commit('counter/decrease')" color="error">decrease</v-btn>
    {{ counter }}
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters["counter/counter"];
    },
  },
};
</script>
