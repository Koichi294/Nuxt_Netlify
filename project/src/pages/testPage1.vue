<template>
  <div>
    <button @click="increment">increment {{ step }}</button>
    <span>total {{ count }}</span>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    computed: {
      step() { return 1},
      count() { return 1}
    },
    methods: {
      increment() {
        this.$store.dispatch('increment')
      }
    }
  }
</script>

<style scoped>

</style>