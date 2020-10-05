<template>
  <div class="container">
    <Counter />
    <CustomTable />
  </div>
</template>

<script>
import Counter from "~/components/Counter.vue";
import CustomTable from "~/components/CustomTable";

export default {
  components: {
    Counter
  }
};
</script>
